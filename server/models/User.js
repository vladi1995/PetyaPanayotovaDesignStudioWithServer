const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Username is required'],
    },

    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },

    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
    },

    profileImageUrl: {
        type: String,
        required: [true, 'Profile picture is required'],
    },

    budget: {
        type: Number,
        required: [true, 'Budget is required'],
    },

    likes: [
        {
            card: {
                type: mongoose.Types.ObjectId,
                ref: 'Card',
            }
        }
    ],

    boughtProducts: [
        {
            card: {
                type: mongoose.Types.ObjectId,
                ref: 'Card',
            }
        }
    ],
});


const User = mongoose.model('User', userSchema);

module.exports = User;