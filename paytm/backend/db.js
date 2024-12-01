const mongoose=require('mongoose');
const Schema=mongoose.Schema;

mongoose.connect("mongodb+srv://singhgovind1202:msg152312@cluster0.ua3mnrb.mongodb.net/Paytm"); // Connection String

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        maxLength:30
    },
    password:{
        type:String,
        minLength:8,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
});

const AccountSchema=new Schema({
    // Important h ye bhi
    // Connect two Tables i.e User & Account (like foreign keys in SQL)
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

const Account=mongoose.model("Account",AccountSchema);

const User=mongoose.model("User",userSchema);

module.exports={
    User,
    Account
};