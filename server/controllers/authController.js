const router = require('express').Router();
const userManager = require('../managers/authManager');

router.post('/register', async (req, res) => {
    const { email, password, firstName, lastName, profileImageUrl, budget, likes } = req.body;

    try {
        const result = await userManager.register(email, password, firstName, lastName, profileImageUrl, budget, likes);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }

});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userManager.login(email, password);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }

});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});

router.get('/:userId', async (req, res) => {
    res.json(await userManager.getCurrentUser(req.params.userId));
});

router.put('/:userId', async (req, res) => {
    const userData = req.body;

    res.json(await userManager.editCurrentUser(req.user._id, userData));
});


module.exports = router;