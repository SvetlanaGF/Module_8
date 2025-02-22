const express = require("express");
const { add, subtract} = require("./math");

const app = express();
const PORT = 3000;

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    if (a === undefined || b === undefined) {
        return res.status(400).send("Parameters 'a' and 'b' are required.");
    }
    const result = add(Number(a), Number(b));
    res.send(`Result: ${result}`);
});


app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    if (a === undefined || b === undefined) {
        return res.status(400).send("Parameters 'a' and 'b' are required.");
    }
    const result = subtract(Number(a), Number(b));
    res.send(`Result: ${result}`);
});

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});


console.log(add(2, 3)); // Выводит 5
console.log(subtract(5, 2)); // Выводит 3