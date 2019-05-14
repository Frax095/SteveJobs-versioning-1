const app = require('../../app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const expect = chai.expect;
process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

describe('GET /', () => {
    const expectedResponse = {};
    it('Test index API', async () => {
        const result = await chai.request(app).get('/');
        expect(result.body).to.be.deep.equal(expectedResponse);
        expect(result.status).to.be.equal(200);
    });
});

describe('DELETE within ID number', () => {
    const expectedResponse = {};
    it('Test DELETE api based on id number', async () => {
        const result = await chai.request(app).delete('/:id');
        expect(result.body).to.be.deep.equal(expectedResponse);
        expect(result.status).to.be.equal(404);
    });
});
