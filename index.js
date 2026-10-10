
const express = require('express');
const app = express();

app.use(express.json());

// 1. GET - Factorial
app.get('/factorial/:n', (req, res) => {
    let fact = 1;
    for (let i = 1; i <= Number(req.params.n); i++) {
        fact *= i;
    }
    res.json({ factorial: fact });
});

// 2. GET - Sum of N numbers
app.get('/sum/:n', (req, res) => {
    let n = Number(req.params.n);
    res.json({ sum: n * (n + 1) / 2 });
});

// 3. GET - Reverse string
app.get('/reverse/:str', (req, res) => {
    res.json({
        reversed: req.params.str.split('').reverse().join('')
    });
});

// 4. POST - Factorial
app.post('/factorial', (req, res) => {
    let fact = 1;
    for (let i = 1; i <= Number(req.body.n); i++) {
        fact *= i;
    }
    res.json({ factorial: fact });
});

// 5. POST - Sum of N numbers
app.post('/sum', (req, res) => {
    let n = Number(req.body.n);
    res.json({ sum: n * (n + 1) / 2 });
});

// 6. POST - Reverse string
app.post('/reverse', (req, res) => {
    res.json({
        reversed: req.body.str.split('').reverse().join('')
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
