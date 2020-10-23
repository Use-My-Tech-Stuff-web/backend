
const supertest = require('supertest');
const server = require('../api/server');
const item = require('./item-router');
const auth = require('../auth/auth-router');


describe('item-router.js', () => {
    
    describe('get/items', () => {

       it("should return 200 OK",async () => {

           const login = await supertest(server)
           .post('/auth/login')
           .send({username:"elbeg1", password:"elbeg"});

           const token = login.body.token;

            const res = await supertest(server)
           .get('/items').set({authorization: token});

           expect(res.status).toBe(200);
        });
        
        it("should return JSON",async () => {

            const login = await supertest(server)
            .post('/auth/login')
            .send({username:"elbeg1", password:"elbeg"});
 
            const token = login.body.token;
 
             const res = await supertest(server)
            .get('/items').set({authorization: token});
            
            expect(res.type).toMatch(/json/i);
         });
    })

    describe('delete item by id ', () => {
        
        it('should return 202', async () => {

            const login = await supertest(server)
           .post('/auth/login')
           .send({username:"elbeg1", password:"elbeg"});

           const token = login.body.token;

           const res = await supertest(server)
           .delete('/items/9').set({authorization: token});

           expect(res.status).toBe(202)
        });

        it('should return Json', async () => {

            const login = await supertest(server)
           .post('/auth/login')
           .send({username:"elbeg1", password:"elbeg"});

           const token = login.body.token;

           const res = await supertest(server)
           .delete('/items/8').set({authorization: token});

           expect(res.type).toMatch(/json/i)
        })
    })

    describe('get item by id ', () => {
        
        it('should return 200', async () => {

            const login = await supertest(server)
           .post('/auth/login')
           .send({username:"elbeg1", password:"elbeg"});

           const token = login.body.token;

           const res = await supertest(server)
           .get('/items/7').set({authorization: token});

           expect(res.status).toBe(200)
        });

        it('should return Json', async () => {

            const login = await supertest(server)
           .post('/auth/login')
           .send({username:"elbeg1", password:"elbeg"});

           const token = login.body.token;

           const res = await supertest(server)
           .get('/items/9').set({authorization: token});

           expect(res.type).toMatch(/json/i)
        })
    })
});


