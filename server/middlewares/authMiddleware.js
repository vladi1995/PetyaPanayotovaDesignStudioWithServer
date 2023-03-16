const jwt = require('../lib/jsonwebtoken');
const SECRET = 'vladislav1995';

exports.authentication = () => async (req, res, next) => {
    const token = req.header('X-Authorization');

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.user = decodedToken;
        } catch (err) {
            return res.status(401).json({ok: false});
        }
    }

    next();
}

