const Card = require('../models/Card');

exports.getAll = () => Card.find({}).populate('ownerId');
exports.getOneDetailed = (cardId) => Card.findById(cardId).populate('ownerId').populate({path: 'commentList', model: 'Card', populate: {path: 'user', model: 'User'}});
exports.create = (cardData) => Card.create(cardData);
exports.edit = (cardId, cardData) => Card.findByIdAndUpdate(cardId, cardData);
exports.delete = (cardId) => Card.findByIdAndDelete(cardId);