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

router.patch('/:groupId', async (req, res) => {
    try {
        const list = await Group.updateOne({
            "_id": req.params.groupId
        }, {
            $push: {
                shopping_lists:{
                    "name": req.body.name,
                    "list": req.body.list
                }
            }
        });
        res.json(list)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:groupId', async (req, res) => {
    try {
        const removedList = await Group.update({
            _id: req.params.groupId
        }, {
            $pull: {
                shopping_lists: {
                    name: req.body.name
                }
            }
        });
        res.json(removedList);
    } catch (err) {
        res.json({
            message: err
        })
    }

});

//////////////////////////////  ITEM

router.patch('/item/:groupId', async (req, res) => {
    try {
        const tmp = "shopping_lists.0.list";
        const list = await Group.updateOne({
            "_id": req.params.groupId,
            "shopping_lists.name": req.body.name
        }, {
            $push: {
                "shopping_lists.$.list": {
                    item: req.body.item,
                    checked: req.body.checked,
                    comments: req.body.comments
                }
            }
        });
        res.json(list)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/item/:groupId', async (req, res) => {
    try {
        const list = await Group.updateOne({
            "_id": req.params.groupId,
            "shopping_lists.name": req.body.name
        }, {
            $pull: {
                "shopping_lists.$.list": {
                    item: req.body.item,
                }
            }
        });
        res.json(list)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

/////////////////////////////////////   COMMENTS

router.patch('/com/:groupId', async (req, res) => {
    try {
        const list = await Group.updateOne({
            "_id": req.params.groupId
        }, {
            $push: {
                "shopping_lists.$[nam].list.$[itm].comments": {
                    nick: req.body.nick,
                    content: req.body.content
                }
            }
        }, {
            arrayFilters: [{
                "nam.name": req.body.name
            }, {
                "itm.item": req.body.item
            }]
        });
        res.json(list)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/com/:groupId', async (req, res) => {
    try {
        const list = await Group.updateOne({
            "_id": req.params.groupId
        }, {
            $pull: {
                "shopping_lists.$[nam].list.$[itm].comments": {
                    content: req.body.content
                }
            }
        }, {
            arrayFilters: [{
                "nam.name": req.body.name
            }, {
                "itm.item": req.body.item
            }]
        });
        res.json(list)
    } catch (err) {
        res.json({
            message: err
        })
    }
})


///////////////////////////////// CHECKING

router.patch('/check/:groupId', async (req, res) => {
    try {
        const list = await Group.updateOne({
            "_id": req.params.groupId
        }, {
            $set: {
                "shopping_lists.$[nam].list.$[itm].checked": req.body.checked
            }
        }, {
            arrayFilters: [{
                "nam.name": req.body.name
            }, {
                "itm.item": req.body.item
            }]
        });
        res.json(list)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;