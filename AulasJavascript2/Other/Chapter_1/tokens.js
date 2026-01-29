// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const cors = require('cors')


// const app = express();
// const PORT = 3000;

// app.use(cors({
//     origin: "*"
// }))

// app.use(bodyParser.json());

// // mock user
// const user = {
//     id: 1,
//     username: 'user',
//     password: 'password'
// };

// const intem = "bananas";

// // login endpoint
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     console.log("test")

//     if (username === user.name && password === user.password) {
//         const token = jwt.sign({ sub: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.send({ token });
//     } else {
//         res.status(401).send({ error: 'invalid credentials' });
//     }
// });
