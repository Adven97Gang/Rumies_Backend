const express = require('express');
const router = express.Router();
const Group = require('../../models/Groups');

router.get('/:groupId', async (req, res) => {
    try {
        const note = await Group.findOne({
            "_id": req.params.groupId
        }, {
            "user_ids": 1
        });
        res.json(note)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:groupId', async (req, res) => {
    try {
        const note = await Group.updateOne({
            "_id": req.params.groupId
        }, {
            $push: {
                user_ids: req.body.user_ids
            }

        });
        res.json(note)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:groupId', async (req, res) => {
    try {
        const removedNote = await Group.update({
            _id: req.params.groupId
        }, {
            $pull: {
                user_ids: req.body.user_ids
            }
        });
        res.json(removedNote);
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;