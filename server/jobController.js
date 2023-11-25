// const ... = require ('./jobModel')

const jobController = {
    //create job app.
    async createJob (req, res, next) {
        try {
            // schema...
            // const newJob = new ...
            const jobData = await newJob.save()
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
    // async updateStatus(req,res,next) {
    //     //update the status of the job.
    //     try {
    //         const updateJob = await job.updateOne()
    //     }
    // }
}