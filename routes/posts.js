const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');

router.get('/', (req, res) => {
    try {
        const posts = await Note.find();
        res.json(posts)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedNote = await note.save();
        res.json(savedNote)
    } catch (err) {
        res.json({
            message: err
        })
    }

});


module.exports = router;