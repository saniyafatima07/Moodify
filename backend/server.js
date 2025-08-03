const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;


const jokes = require("./jokes.json");
const riddles = require("./riddles.json");
const quotes = require("./quotes.json");

app.use(cors());

app.get("/joke", (req,res) => {
    const random = jokes[Math.floor(Math.random()* jokes.length)];
    res.json({jokes: random});
});

app.get("/riddle", (req,res) => {
    const random = riddles[Math.floor(Math.random()* riddles.length)];
    res.json({riddles: random});
});

app.get("/quote",(req,res) => {
    const random = quotes[Math.floor(Math.random()* quotes.length)];
    res.json({quotes: random});
});

app.listen(PORT,()=>{
    console.log(`Moodify API running at http://localhost:${PORT}`);
});
