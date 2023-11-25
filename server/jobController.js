// const Job = require ('./jobModel')

const jobController = {
    //create job app.
    async createJob (req, res, next) {
        try {
            const { title, dateApplied, status } = req.body
            const newJob = new Job({title,dateApplied,status}) 
            const jobData = await newJob.save()
            res.locals.job = jobData
            return next();
        } catch (error) {
            return next({
                log: `Error in the jobController.createJob: ${error}`,
                message: {err: 'Error in creating new job application'},
                status: 400,
            })
        }
    },

    //possible use model.updateOne
    async updateStatus(req,res,next) {
        //update the status of the job.
        try {
            const jobId = req.params.id
            const updatedJob = await job.findByIdAndUpdate(jobId, req.body, {new:true});//return modified document)
            if (updatedJob) {
                res.updatedJob = updatedJob
                return next();
            }
        } catch (error) {
            return next({
                log: 'Error in the jobController.updateStatus',
                message: {err: 'Error occured in updating status'},
                status: 400
              });
        }
    },

    async deleteStatus(req,res,next) {
        try {
            const jobId = req.arams.id;
            const deletedJob = await Job.findByIdAndDelete(jobId);
            if (jobId) {
                req.deletedJob = deletedJob;
                return next();
            } else{
                return next({
                    log: 'Error in the jobController.deleteStatus',
                    message: {err: 'Error occured in deleting job'},
                    status: 400
                  });
                }
              } catch (error) {
                return next({
                    log: 'Error in the jobController.deleteStatus',
                    message: {err: 'Error occured in deleting job'},
                  status: 400
                });
            }
        }
    }

    module.exports = JobController