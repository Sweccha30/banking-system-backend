const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express")
const cookieParser= require("cookie-parser")


const app = express()

/**
 * Routes Required
 */

const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")


/**
 * Use Routes
 */


app.use(express.json())            //middleware
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)


module.exports = app