const express = require('express');
const router = express.Router();
const Group = require('../../models/Groups');

router.get('/:groupId', async (req, res) => {
    try {
        const shoppingLists = await Group.findOne({
            "_id": req.params.groupId
        }, {
            "shopping_lists": 1
        });
        res.json(shoppingLists)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;