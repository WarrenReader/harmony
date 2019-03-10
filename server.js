require("dotenv").config();
const express = require("express");

const users = require("./routes/api/users");

const { PORT } = process.env;

const app = express();

app.get("/", (req, res) => res.json({ msg: "Here" }));
app.use("/api/users", users);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
