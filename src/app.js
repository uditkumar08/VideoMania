import express from "express"
import cors from "cors"
const app = express()

//cors is that who talk to database like that and middleware

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        Credential: true
    })
)

// common middleware
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({ extended: true,
    limit:"16kb"}))
app.use(express.static("public"))



export {app}