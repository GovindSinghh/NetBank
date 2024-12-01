const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_secret = require('../config');
const { User } = require('../db');
const { authMiddleware } = require('../middleware');
const zod = require('zod');
const { Account } = require('../db');

const router = express.Router();

// Zod schema for signup validation
const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

// Signup route
router.post("/signup", async function (req, res) {
    const body = req.body;

    // Validate body against schema
    const { success } = signupSchema.safeParse(body);
    if (!success) {
        return res.status(400).json({
            message: "Incorrect inputs"
        });
    }

    // Check if user already exists
    const dbUser = await User.findOne({
        username: body.username
    });
    if (dbUser) {
        return res.status(409).json({
            message: "User already exists"
        });
    };

    // Create a new user
    const user = await User.create(body);

    // Create a corresponding account
    await Account.create({
        userId: user._id,
        balance: 1 + Math.random() * 10000
    });

    // Sign JWT token
    const token = jwt.sign({
        userId: user._id
    }, jwt_secret);

    res.status(200).json({
        message: "User created successfully",
        token: token
    });
});

// Zod schema for signin validation
const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

// Signin route
router.post("/signin", async function (req, res) {
    const body = req.body;

    // Validate body against schema
    const { success } = signinSchema.safeParse(body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    // Find the user
    const user = await User.findOne({
        username: body.username
    });
    if (user) {
        // Sign JWT token
        const token = jwt.sign({
            userId: user._id
        }, jwt_secret);

        res.json({
            token: token
        });
        return;
    }

    res.status(401).json({
        message: "Invalid credentials"
    });
});

// Zod schema for update validation
const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

// Update user info route
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            message: "Invalid input for update"
        });
    }

    // Update user data
    await User.updateOne({
        _id: req.userId
    }, req.body);

    res.json({
        message: "Updated successfully"
    });
});

// Bulk user search route
router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter;

    // Search for users based on first or last name using regex
    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: 'i' } },
            { lastName: { $regex: filter, $options: 'i' } }
        ]
    });

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user._id
        }))
    });
});

module.exports = router;
