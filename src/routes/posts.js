const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');

router.get('/', async (req, res) => {
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

router.get('/:postId', async (req, res) => {
    try {
        const post = await Note.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({
            message: err
        })
    }
});


router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Note.remove({
            _id: req.params.postId
        });
        res.json(removedPost);
    } catch (err) {
        res.json({
            message: err
        })
    }

});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Note.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({
            message: err
        })
    }

});


module.exports = router;