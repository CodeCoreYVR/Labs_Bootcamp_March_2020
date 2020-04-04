const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.render('survey');
});

app.post('/results', (request, response) => {
  const options = {
    deadline: {
      rational: {
        ideas: 'Rational',
        facts: 'Guardian'
      },
      compassionate: {
        ideas: 'Idealist',
        facts: 'Guardian'
      }
    },
    withoutDeadline: {
      rational: {
        ideas: 'Rational',
        facts: 'Artisan'
      },
      compassionate: {
        ideas: 'Idealist',
        facts: 'Artisan'
      }
    }
  };

  const body = request.body;
  const deadline = body.deadline;
  const rational = body.rational;
  const ideas = body.ideas;

  response.render('results', { result: options[deadline][rational][ideas] });
});

const PORT = 4000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
  console.log(`The server is listening at http://${DOMAIN}:${PORT}`);
});
