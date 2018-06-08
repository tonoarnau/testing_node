const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Lucas',
        age: 98
    }, {
        name: 'Alex',
        age: 55
    }]);
});

app.listen(3000);

module.exports.app = app;