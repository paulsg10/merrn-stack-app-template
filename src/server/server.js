const express = require('express');
const path = require('path');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exampleController = require('./controllers/exampleController.js');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// REST API
app.get('/getData', exampleController.getData);
app.post('/addData', exampleController.addData);
// app.put('/editData', dataController.editData);
app.delete('/deleteData', exampleController.deleteData);

app.use(express.static(path.join(__dirname, '/../../dist')));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log('Connected to database...');
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on PORT 3000...');
});
