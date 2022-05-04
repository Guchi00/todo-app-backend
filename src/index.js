const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const api = require("./api");
// const items = require("./api/items")


require("dotenv").config();

mongoose
    .connect(process.env.DATABASE_URL)
    .then(res => console.log(`db connected to: ${res.connection.host}`))

const app = express();
const PORT = 3001;

app.use(cors());                   //It allow ordinary request from different domains
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
    res.json({message: "welcome to scylla"});
});


app.use("/api", api);
// app.use("/items", items);
         


app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`)
});