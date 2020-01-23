const express = require('express');
const faker = require('faker');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3020;

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.get('/api/reactions', (req, res) => {
    const likes = faker.random.number(1000);
    const love = faker.random.number(1000);
    const angry = faker.random.number(1000);
    const sad = faker.random.number(1000);
    const haha = faker.random.number(1000);
    
    const body = {
        likes,
        love,
        angry,
        sad,
        haha
    };
    res.status(200).json(body);
});

app.listen(PORT, () => console.log('App listening on port: ', PORT));