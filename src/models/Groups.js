const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: false,
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const CommentSchema = mongoose.Schema({
    _id: false,
    nick: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
});

const ListSchema = mongoose.Schema({
    _id: false,
    item: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    },
    comments: [{
        type: CommentSchema,
        required: false
    }],
});

const ShoppingListSchema = mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    list: [{
        type: ListSchema,
        required: true
    }]
});

const MessageSchema = mongoose.Schema({
    _id: false,
    user_nick: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const GroupsSchema = mongoose.Schema({
    group_name: {
        type: String,
        required: true
    },
    user_ids: [{
        type: String,
        required: true
    }],
    shopping_lists: [ShoppingListSchema],
    notes: [NoteSchema],
    chat: [MessageSchema],

});

module.exports = mongoose.model('Groups', GroupsSchema);