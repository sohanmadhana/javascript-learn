const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.send("GET request by using express")
})

app.listen(3000, () => {
    console.log("You are on port 3000.")
});

console.log("Testing if nodemon is working?")