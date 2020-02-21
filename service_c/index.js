const express = require('express');
const faker = require('faker');
const cors = require('cors');
const axios = require('axios').default;
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan("dev"));

const PORT = 3015;

app.get('/api/comment', async (req, res) => {
    const comment = faker.lorem.sentence(faker.random.number({ min: 5, max: 10}));
    const date = new Date().toLocaleString();
    let response;
    response = await axios.get('http://service_c_envoy:3017/api/author');
    const author = response.data;

    response = await axios.get('http://service_c_envoy:3018/api/reactions');
    const reactions = response.data;

    const body = {
        comment,
        date,
        author,
        reactions
    };
    res.json(body);
});

app.listen(PORT, () => {
    console.log(`App ready on port: ${PORT}`);
});