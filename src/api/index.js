const express = require("express");

const router = express.Router();

const items = require("./items");

router.get("/", (_req, res) => {
    res.json({msg: "Welcome to API"})}
);

router.use("/items", items);

module.exports = router;