const router = require('express').Router();
const cardManager = require('../managers/cardManager');

router.get('/', async(req, res) => {
    const cards = await cardManager.getAll();
    res.json(cards);
});

router.get('/details/:cardId', async(req, res) => {
    const card = await cardManager.getOneDetailed(req.params.cardId);
    res.json(card);
});

router.get('/delete/:cardId', async(req, res) => {
    const card = await cardManager.getOneDetailed(req.params.cardId);
    res.json(card);
});

router.post('/', async (req, res) => {
    const cardData = req.body;
    const card = await cardManager.create(cardData);

    res.json(card);
});

router.delete('/delete/:cardId', async(req, res) => {
    const card = await cardManager.delete(req.params.cardId);
    res.json(card);
});

router.put('/edit/:cardId', async (req, res) => {
    const cardData = req.body;
    await cardManager.edit(req.params.cardId, cardData);

    res.json(await cardManager.edit(req.params.cardId, cardData));
});

module.exports = router;