const express = require('express');
const router = express.Router();
const Group = require('../models/Groups');

const notesRoute = require('./groupElements/notes');
const shoppingListRoute = require('./groupElements/shoppingLists');
const userListRoute = require('./groupElements/userList');

router.use('/notes', notesRoute)
router.use('/shopping', shoppingListRoute)
router.use('/users', userListRoute)

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
        notes: req.body.notes
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

router.get('/id/:groupId', async (req, res) => {
    try {
        const group = await Group.findOne({
            "_id": req.params.groupId
        });
        res.json(group)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.get('/name/:groupName', async (req, res) => {
    try {
        const group = await Group.findOne({
            "slug": req.params.groupName
        });
        res.json(group)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;