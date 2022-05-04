// const { Router } = require("express"); //
const express = require("express");
const mongoose = require ("mongoose");
const uuid = require ("uuid");

const router = express.Router();


const itemsSchema = new mongoose.Schema({
    name: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const Item = mongoose.model("Item", itemsSchema);


router.get("/", async (_req, res) => {
    const items = await Item.find(); 
    res.json({ data: items })
});

router.post("/", async (req, res) => {
    const { name } = req.body;
    const newItem = await Item.create({
        name 
    })
    res.json({ data: newItem });
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, completed } = req.body;
    const item = await Item.findByIdAndUpdate(id, {
        name,
        completed
    });
    res.json({ data: item });
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.json({ msg: `item with id: ${id} has been deleted` });
});



module.exports = router;