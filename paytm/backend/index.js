const express = require("express");
const jwt=require('jsonwebtoken');
const cors=require('cors');  // cross - origin resource sharing

const rootRouter=require('../backend/Routes/index')
const app=express();
app.use(express.json()); // body-parser
app.use(cors()); // cors

app.use("/api/v1",rootRouter);

const PORT=3000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));