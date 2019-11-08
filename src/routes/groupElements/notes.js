const express = require('express');
const router = express.Router();
const Group = require('../../models/Groups');

router.get('/:groupId', async (req, res) => {
    try {
        const note = await Group.findOne({
            "_id": req.params.groupId
        }, {
            "notes": 1
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
                notes: req.body.notes
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
                notes: {
                    content: req.body.content
                }
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