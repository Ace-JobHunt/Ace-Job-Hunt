const request = require('supertest');
const server = 'http://localhost:3000';
const { Job } = require('../server/models/jobModel');
const jobController = require('../server/controllers/jobController');

describe('Route integration', () => {
  const testObj = {
    dateApplied: 2023-11-28,
    company: 'TestCompany',
    title: 'Software Engineer',
    salary: 100000,
    status: 'Interested',
    link: 'www.google.com',
  };

  const patchTestObj = {
    dateApplied: 2023-11-28,
    company: 'TestCompany',
    title: 'Software Engineer',
    salary: 100000,
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
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });          
      it('database contains the new post', async () => {
        const response = await request(server)
          .post('/')
          .send([testObj]);

        Job.findOne({company: 'TestCompany'})
          .then(response => response.json())
          .then(data => {
            expect(data).toBe(testObj);
          })
        // Job.findOneAndDelete({company: 'TestCompany'});
      });
    });
  });

  describe('/:id', () => {
    // set up beforeEach, beforeAll to create a dummy data and grab _id

    describe('PATCH', () => {
        it('responds with 200 status and text/html content type', () => {
            return request(server)
              .get('/')
              .expect('Content-Type', /text\/html/)
              .expect(200);
          });          
          it('post in the database is updated with new status', async () => {
            // const postResponse = await request(server)
            //   .post('/')
            //   .send([testObj])
            //   .end();

              
              const app = await Job.findOne({company: 'TestCompany'});
              const id = app._id;
              
                

              const patchResponse = await request(server)
              .patch(`/${id}`)
              .send([patchTestObj])
              .end();

              const updatedApp = await Job.findOne({company: 'TestCompany'});
              expect(updatedApp).toEqual(patchTestObj)
    
            Job.findOneAndDelete({company: 'TestCompany'});
          });
        });
    });


  describe('DELETE', () => {
    it('responds with 200 status and text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
    });          
    it('deletes post', async () => {
      const app = Job.findOne({company: 'TestCompany'});
      const id = app._id;
      const response = await request(server)
        .delete(`/${id}`)
        // .expect(200);
        // .end((err, res) => {
        //   // expect(res.body).toBe(testObj);
        // });
      
      expect(id).toBe(testObj);
    });
  });
});


