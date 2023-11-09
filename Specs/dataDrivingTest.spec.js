// Test: dataDrivingTest.spec.js
const request = require('supertest');

const config = require('../Config/testConfig'); // import test config
const requestData = require('../TestData/requestData'); // import request data
const responseData = require('../TestData/responseData'); // import response data

// Test Suite
describe('Data Driving-Verify that the Get and POST API returns correctly', () => {
    // Test case 1
    it('Data Driving-Verify that the GET API returns correctly', async () => {
        const res = await request(config.host) // Test endpoint
            .get(config.getAPI) // API endpoint
            .send(requestData.getAPI) // request body
            .expect(200); // use supertest's expect to verify that the status code is 200
        // user jest's expect to verify the response body
        expect(res.status).toBe(200); // Verify that the status code is 200
        expect(res.body).toEqual(responseData.getAPI); // Verify that the id is 1
    });

    // Test case 2
    it('Data Driving-Verify that the POST API returns correctly', async() =>{
        const res = await request(config.host) // Test endpoint
            .post(config.postAPI) // API endpoint
            .send(requestData.postAPI) // request body
            .expect(201); // use supertest's expect to verify that the status code is 201
        // user jest's expect to verify the response body
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(responseData.postAPI);
    });
});