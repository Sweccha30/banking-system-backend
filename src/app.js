const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express")
const cookieParser= require("cookie-parser")
const authRouter = require("./routes/auth.routes")


const app = express()


app.use(express.json())            //middleware
app.use(cookieParser())

app.use("/api/auth", authRouter)


module.exports = app