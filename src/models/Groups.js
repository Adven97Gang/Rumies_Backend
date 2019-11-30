const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

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

const GroupsSchema = mongoose.Schema({
    group_name: {
        type: String,
        required: true,
        unique: true
    },
    slug:{
        type: String, 
        slug: "group_name"
    },
    user_ids: [{
        type: String,
        required: true
    }],
    shopping_lists: [ShoppingListSchema],
    notes: [NoteSchema]

});

module.exports = mongoose.model('Groups', GroupsSchema);