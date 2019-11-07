const express = require('express');
const router = express.Router();
const Group = require('../models/Groups');

const notesRoute = require('./groupElements/notes');
router.use('/notes', notesRoute)

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

router.get('/:groupId', async (req, res) => {
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

// router.get('/notes', async (req, res) => {
//     try {
//         const notes = await Group.find({}, {
//             "notes": 1
//         });
//         res.json(notes)
//     } catch (err) {
//         res.json({
//             message: err
//         })
//     }
// })



module.exports = router;