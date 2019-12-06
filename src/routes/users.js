const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.get('/name', async (req, res) => {
    try {
        const users = await User.find({}, { first_name: 1, last_name: 1, nick: 1 });
        res.json(users)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.get('/groups/nick/:nick', async (req, res) => {
    try {
        const groups = await User.findOne({
            nick: req.params.nick
        }, {
            "groups": 1
        });
        res.json(groups)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/groups/nick/:nick', async (req, res) => {
    try {
        const groups = await User.updateOne({
            nick: req.params.nick
        }, {
                $push: {
                    "groups": {
                        "id": req.body.id,
                        "name": req.body.name
                    }
                }
        });
        
        res.json(groups)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/login', async (req, res) => {
    User.findOne({
        nick: req.body.nick
    }, (err, usr) => {
        if (usr === null) {
            return res.status(400).send({
                message: "User not found."
            });
        } else {
            if (usr.validPassword(req.body.password)) {
                return res.status(201).send(usr);
            } else {
                return res.status(400).send({
                    message: "Wrong Password"
                });
            }
        }
    })
});

router.post('/register', async (req, res) => {
    // res.setEncoding('utf8');
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        nick: req.body.nick,
        email: req.body.email,
        password: req.body.password,
        groups: req.body.groups
    });
    user.setPassword(req.body.password);

    try {
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

router.get('/nick/:nick', async (req, res) => {
    try {
        const user = await User.findOne({
            nick: req.params.nick
        });
        res.json(user);
    } catch (err) {
        res.json({
            message: err
        })
    }
});


router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({
            _id: req.params.userId
        });
        res.json(removedUser);
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;