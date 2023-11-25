const { Job } = require('../models/jobModel');

const jobController = {
  //create job app.
  async createJob(req, res, next) {
    try {
      const { company, title, dateApplied, dateChanged, salary, status, link } =
        req.body;
      if (
        company.length &&
        title.length &&
        dateApplied.length &&
        status.length
      ) {
        const newJob = await Job.create({
          company,
          title,
          dateApplied,
          dateChanged,
          salary,
          status,
          link,
        });
        return next();
      } else {
        return next({
          log: `Error in the jobController.createJob`,
          message: { err: 'Error in creating new job application' },
          status: 400,
        });
      }
    } catch (error) {
      return next({
        log: `Error in the jobController.createJob: ${error}`,
        message: { err: 'Error in creating new job application' },
        status: 500,
      });
    }
  },

  async updateStatus(req, res, next) {
    //update the status of the job.
    try {
      const jobId = req.params.id;
      const { company, title, dateApplied, dateChanged, salary, status, link } =
        req.body;

      const updatedJob = await Job.updateOne(
        { id: jobId },
        { company, title, dateApplied, dateChanged, salary, status, link }
      );
      return next();
    } catch (error) {
      return next({
        log: `Error in the jobController.updateStatus: ${error}`,
        message: { err: 'Error occured in updating status' },
        status: 500,
      });
    }
  },

  async deleteStatus(req, res, next) {
    try {
      const jobId = req.arams.id;
      if (jobId) {
        const deletedJob = await Job.findByIdAndDelete(jobId);
        return next();
      } else {
        return next({
          log: 'Error in the jobController.deleteStatus',
          message: { err: 'Error occured in deleting job' },
          status: 400,
        });
      }
    } catch (error) {
      return next({
        log: `Error in the jobController.deleteStatus: ${error}`,
        message: { err: 'Error occured in deleting job' },
        status: 500,
      });
    }
  },

  async syncData(req, res, next) {
    try {
      const allInterested = await Job.find({ status: 'interested' });
      const allApplied = await Job.find({ status: 'applied' });
      const allnterviewed = await Job.find({ status: 'interviewed' });
      const allFollowedup = await Job.find({ status: 'followedup' });
      const allAccepted = await Job.find({ status: 'accepted' });
      const allRejected = await Job.find({ status: 'rejected' });

      let syncObject = {
        interested: allInterested,
        applied: allApplied,
        interviewed: allnterviewed,
        followedup: allFollowedup,
        accepted: allAccepted,
        rejected: allRejected,
      };

      res.locals.syncData = syncObject;
      return next();
    } catch (error) {
      return next({
        log: `Error in the jobController.syncData: ${error}`,
        message: { err: 'Error occured in syncing' },
        status: 500,
      });
    }
  },
};

module.exports = jobController;
