const express = require('express');
const faker = require('faker');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

const PORT = 3010;
app.use(cors());
app.use(morgan("dev"));

app.get('/api/author', (req, res) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const body = {
        firstName,
        lastName
    };
    res.json(body);
});

app.listen(PORT, () => {
    console.log(`App ready on port: ${PORT}`);
});