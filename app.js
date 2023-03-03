const express = require('express') //Importamos la dependencia.
const app = express() //Declaramos una App de Express
const port = process.env.Port || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', {ID: req.params.id});
});

app.get('/api', (req, res) => {
  res.json({firstname: 'Fernando', lastname: 'Chacón'});
});

app.listen(port);