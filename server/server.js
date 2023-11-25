const path = require('path');
const express = require('express');
const { deleteJob } = require('../client/reducers/jobReducer');
const app = express();
const PORT = 3000;

const jobController = require ('./jobController')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
);

app.use((req, res) => res.status(404).send('Page Not Found'));

//Routers
const jobRouter = express.Router()
app.use('/job', jobRouter);

//Creating job in database

jobRouter.post('/', jobController.createJob, (req,res) => {
  res.status(201).json(res.locals.job)
})

//Updating job in database

app.patch('/:id', updateStatus, (req,res) => {
  res.json({
    message: 'Job updated!',
    updatedJob: req.updatedJob
  })
})

//Deleting job in database
jobRouter.delete('/:id', jobController.deleteStatus, (req,res) => {
  res.json({
    message: 'Job deleted', deletedJob: req.deletedJob
  })
})


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
