const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const User = require('../models/User');

const SECRET = 'vladislav1995';

exports.login = async(email, password) => {
    const user = await User.findOne({email});

    if(!user) {
        throw new Error('Невалидни email или парола!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Невалидни email или парола!');
    }

    const payload = {
        _id: user._id,
        email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        budget: user.budget,
        likes: user.likes,
    }

    const token = await jwt.sign(payload, SECRET);

    return {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        budget: user.budget,
        likes: user.likes,
        accessToken: token,
    };
}

exports.register = async(email, password, firstName, lastName, profileImageUrl, budget, likes) => {
    const existingUser = await User.findOne({email});

    if (existingUser) {
        throw new Error('Потребителят вече съществува!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({email, password: hashedPassword, firstName, lastName, profileImageUrl, budget, likes});

    return this.login(email, password);
}

exports.getCurrentUser = (userId) => User.findById(userId);

exports.editCurrentUser = (userId, userData) => User.findByIdAndUpdate(userId, userData);
