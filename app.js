const express = require("express");
const path = require("path");

const app = express();

// middleware (important)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files serve karna (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));


// basic test route
app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend se hello 👋",
        status: "success"
    });
});

// server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
