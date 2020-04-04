const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.render('index', { winnersName: null, namesList: '' });
});

app.post('/', (request, response) => {
  // request.body !== undefined; // once body parser is working
  const body = request.body;
  const names = body.names;
  const namesArr = names.replace(/\s+/gi, '').split(',');
  const winner = namesArr[Math.floor(Math.random() * namesArr.length)];
  response.render('index', { winnersName: winner, namesList: names });
});

const PORT = 4000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
  console.log(`The server is running at http://${DOMAIN}:${PORT}`);
});
