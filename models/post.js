const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        }
    }],
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Post', PostSchema);
