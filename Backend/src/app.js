const express = require("express");
const CookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());
app.use(CookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users" , userRouter);

module.exports = app;
