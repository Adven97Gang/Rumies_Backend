const express = require('express');
const router = express.Router();
const Group = require('../models/Groups');

router.get('/', async (req, res) => {
    try {
        const groups = await Group.find();
        res.json(groups)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    const group = new Group({
        group_name: req.body.group_name,
        user_ids: req.body.user_ids,
        shopping_lists: req.body.shopping_lists,
        notes: req.body.notes,
        chat: req.body.chat
    });

    try {
        const savedGroup = await group.save();
        res.json(savedGroup)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;