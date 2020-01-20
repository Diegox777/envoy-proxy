const express = require('express');
const faker = require('faker');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3015;

app.get('/api/comment', (req, res) => {
    const comment = faker.lorem.sentence(faker.random.number({ min: 5, max: 10}));
    const date = new Date().toLocaleString();
    const body = {
        comment,
        date
    };
    res.json(body);
});

app.listen(PORT, () => {
    console.log(`App ready on port: ${PORT}`);
});