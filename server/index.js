const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { authentication } = require('./middlewares/authMiddleware');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(authentication());
const routes = require('./routes');

app.get('/', (req, res) => {
    res.send('123');
});

app.use(routes);
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/cards');

app.listen(3030, () => console.log('Server is listening on port 3030'));