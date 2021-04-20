const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//connect database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("API Running working fine"));

app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost/2300");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS,PATCH,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type,Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentails", true);
    next();
});

//define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Serve static assets in production

if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
});
