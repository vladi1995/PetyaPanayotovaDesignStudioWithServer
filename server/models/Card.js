const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },

    count: {
        type: Number,
        required: [true, 'Count is required'],
    },

    price: {
        type: Number,
        required: [true, 'Price is required'],
    },

    image: {
        type: String,
        required: [true, 'Image is required'],
    },

    description: {
        type: String,
        required: [true, 'Description is required'],
    },

    category: {
        type: String,
        required: [true, 'Category is required'],
    },

    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    commentList: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            },
            comment: String,
        }
    ],
    
    likes: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            },
        }
    ],

    boughtProducts: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            },
            count: Number,
        }
    ],
});


const Card = mongoose.model('Card', cardSchema);

module.exports = Card;