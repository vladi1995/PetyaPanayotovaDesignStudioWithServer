const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const User = require('../models/User');

const SECRET = 'vladislav1995';

exports.login = async(email, password) => {
    const user = await User.findOne({email});

    if(!user) {
        throw new Error('Invalid email or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Invalid email or password!');
    }

    const payload = {
        _id: user._id,
        email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        budget: user.budget,
    }

    const token = await jwt.sign(payload, SECRET);

    return {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        budget: user.budget,
        accessToken: token,
    };
}

exports.register = async(email, password, firstName, lastName, profileImageUrl, budget) => {
    const existingUser = await User.findOne({email});

    if (existingUser) {
        throw new Error('User exists!');
    }

    if (password.length < 4) {
        throw new Error('Password too short');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({email, password: hashedPassword, firstName, lastName, profileImageUrl, budget});

    return this.login(email, password);
}
