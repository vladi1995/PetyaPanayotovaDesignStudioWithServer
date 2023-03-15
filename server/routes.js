const router = require('express').Router();

const userController = require('./controllers/userController');
const cardController = require('./controllers/cardController');

router.use('/users', userController);
router.use('/cards', cardController);

module.exports = router;