const path = require('path');
const express = require('express');

const jobController = require('./controllers/jobController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../build')));

//Sync data to redux store
app.get('/data', jobController.syncData, (req, res) => {
  return res.status(200).json(res.locals.syncData);
});

//Creating job in database
app.post('/', jobController.createJob, (req, res) => {
  return res.status(200).redirect('/');
});

//Updating job in database
app.patch('/:id', jobController.updateStatus, (req, res) => {
  return res.status(200).redirect('/');
});

//Deleting job in database
app.delete('/:id', jobController.deleteStatus, (req, res) => {
  return res.status(200).redirect('/');
});

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
);

app.use((req, res) => res.status(404).send('Page Not Found'));

//Global error Handle
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
