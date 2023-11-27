const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  dateApplied: { type: Date, required: true },
  company: { type: String, required: true },
  title: { type: String, required: true },
  salary: String,
  status: { type: String, required: true },
  link: String,
});

const Job = mongoose.model('job', jobSchema);

module.exports = { Job };
