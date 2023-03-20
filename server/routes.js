const router = require('express').Router();

const authController = require('./controllers/authController');
const cardController = require('./controllers/cardController');

router.use('/users', authController);
router.use('/cards', cardController);

module.exports = router;