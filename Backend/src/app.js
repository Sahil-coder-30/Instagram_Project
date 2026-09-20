const express = require("express");
const CookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

/** Middelware used.. */

app.use(express.json());
app.use(CookieParser());
const allowedOrigins = [
    "https://web-dev-lyft.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== "production") {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    }
}))


/**routes required here... */

const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");


/**Routes user here ... */

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users" , userRouter);

module.exports = app;
