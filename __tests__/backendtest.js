const request = require('supertest');
const server = 'http://localhost:3000';
const { Job } = require('../server/models/jobModel');
const jobController = require('../server/controllers/jobController');



describe('Route integration', () => {
  const testObj = {
    dateApplied: new Date(),
    company: 'TestCompany',
    title: 'Software Engineer',
    salary: '100000',
    status: 'Interested',
    link: 'www.google.com',
  };

  const patchTestObj = {
    dateApplied: new Date(),
    company: 'TestCompany',
    title: 'CEO',
    salary: '200000',
    status: 'Interested',
    link: 'www.google.com',
  };

  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });  
    
    describe('POST', () => {
      it('responds with 200 status and JSON content type', async () => {
        const response = await request(server)
          .post('/')
          .send(testObj)
          .expect(302);
        await Job.deleteMany({ company: 'TestCompany' });
      });
    
      it('database contains the new post', async () => {
        const response = await request(server)
          .post('/')
          .send(testObj);

        const createdJob = await Job.findOne({ company: 'TestCompany' });
        expect(createdJob.toObject().company).toEqual(testObj.company);
        await Job.deleteMany({ company: 'TestCompany' });
      });
    });
  
  describe('/:id', () => {
    describe('PATCH', () => {
        it('post in the database is updated with new status', async () => {
          const response = await request(server)
            .post('/')
            .send(testObj);
          
          const app = await Job.findOne({company: 'TestCompany'});
          const id = app._id.toString();

          const patchResponse = await request(server)
            .patch(`/${id}`)
            .send(patchTestObj);

          const updatedApp = await Job.findOne({ _id: id });
          expect(updatedApp.toObject().title).toEqual(patchTestObj.title);

          // NOT DONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
          
          // expect(app).toBe(123);
          // expect(app.toObject().title).toEqual(patchTestObj.title);

          await Job.deleteMany({ company: 'TestCompany' });
        });
      });
    });


    xdescribe('DELETE', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
      it('deletes post', async () => {
        const app = await Job.findOne({company: 'TestCompany'});
          const id = app._id.toString();
        const response = await request(server)
          .delete(`/${id}`)
        expect(app).toBe(123);
          // .end((err, res) => {
          //   // expect(res.body).toBe(testObj);
          // });
      });
    });
});

});
