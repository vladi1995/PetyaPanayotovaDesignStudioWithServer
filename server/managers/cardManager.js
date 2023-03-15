const Card = require('../models/Card');

exports.getAll = () => Card.find({});
exports.getOneDetailed = (cardId) => Card.findById(cardId).populate('ownerId').populate('likes');
exports.create = (cardData) => Card.create(cardData);
exports.update = (cardId, cardData) => Card.findByIdAndUpdate(cardId, cardData);
exports.delete = (cardId) => Card.findByIdAndDelete(cardId);