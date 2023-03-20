const router = require('express').Router();
const cardManager = require('../managers/cardManager');
const userManager = require('../managers/authManager');

router.get('/:userId', async(req, res) => {
    const cards = await cardManager.getAllCards(req.params.userId);
    res.json(cards);
});

router.get('/', async (req, res) => {
    const cards = await cardManager.getAll();
    res.json(cards);
});

router.get('/details/:cardId', async (req, res) => {
    const card = await cardManager.getOneDetailed(req.params.cardId);
    const currentUser = await userManager.getCurrentUser(req.user);

    res.json({
        card,
        currentUser,
    });
});

router.get('/delete/:cardId', async (req, res) => {
    const card = await cardManager.getOneDetailed(req.params.cardId);
    res.json(card);
});

router.post('/', async (req, res) => {
    const cardData = req.body;
    try {
        const card = await cardManager.create(cardData);
        res.json(card);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/delete/:cardId', async (req, res) => {
    const card = await cardManager.delete(req.params.cardId);
    res.json(card);
});

router.put('/edit/:cardId', async (req, res) => {
    const cardData = req.body;
    await cardManager.edit(req.params.cardId, cardData);

    res.json(await cardManager.edit(req.params.cardId, cardData));
});

module.exports = router;