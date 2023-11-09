// const request = require('supertest');
//
// // Test Suite
// describe('Verify that the Get and POST API returns correctly', () => {
//     // Test case 1
//     it('Verify that the GET API returns correctly', async () => {
//         const res = await request('https://jsonplaceholder.typicode.com') // Test endpoint
//             .get('/posts/1') // API endpoint
//             .send() // request body
//             .expect(200); // use supertest's expect to verify that the status code is 200
//         // user jest's expect to verify the response body
//         expect(res.status).toBe(200); // Verify that the status code is 200
//         expect(res.body.id).toEqual(1); // Verify that the id is 1
//         expect(res.body.userId).toEqual(1); // Verify that the userId is 1
//         expect(res.body.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
//         expect(res.body.body).toEqual("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
//     });
//
//     // Test case 2
//     it('Verify that the POST API returns correctly', async() =>{
//         const res = await request('https://jsonplaceholder.typicode.com') // Test endpoint
//             .post('/posts') // API endpoint
//             .send({
//                 "title": "foo",
//                 "body": "bar",
//                 "userId": 1
//             }) // request body
//             .expect(201); // use supertest's expect to verify that the status code is 201
//         // user jest's expect to verify the response body
//         expect(res.statusCode).toBe(201);
//         expect(res.body.id).toEqual(101);
//         expect(res.body.userId).toEqual(1);
//         expect(res.body.title).toEqual("foo");
//         expect(res.body.body).toEqual("bar");
//     });
// });