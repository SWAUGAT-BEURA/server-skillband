const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConn = require('./db/db.conn');

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category")
const courseRouter = require("./routes/course")
const googleRouter = require("./routes/google")
const dashboardRoutes=require('./routes/userDashboardRouter');

const bodyParser = require('body-parser')
const cors=require('cors');

const corsOption={
    "origin":"*"
}

dotenv.config();
app.use(express.json());
app.use(bodyParser.json())
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }))
dbConn();
 
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/course', courseRouter);
app.use(googleRouter);
app.use("/api/userDashboard", dashboardRoutes);

app.listen("4000",()=>{
    console.log("Backend is running at port 4000");
});