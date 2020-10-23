
const supertest = require('supertest');
const server = require('../api/server');
const item = require('./item-router');
const auth = require('../auth/auth-router');


describe('item-router.js', () => {
    let res = {};
    let token = "";
    beforeAll(async () => {
        const login = await supertest(server)
            .post('/auth/login')
            .send({username:"elbeg1", password:"elbeg"});
 
        token = login.body.token;
    })
    describe.only('get/items', () => {
        
       it("should return 200 OK",async () => {
            res = await supertest(server)
                .get('/items').set({authorization: token});

           expect(res.status).toBe(200);
        });
        it("should return JSON",async () => { 
            res = await supertest(server)
                .get('/items').set({authorization: token});
            console.log(res.body)
            expect(res.type).toMatch(/json/i);
         });
    })

    describe.only('delete item by id ', () => {
       
        it('should return 202', async () => {
            res = await supertest(server)
                .delete('/items/3').set({authorization: token});
            
           expect(res.status).toBe(202)
        });

        it('should return Json', async () => {
            res = await supertest(server)
                .delete('/items/3').set({authorization: token});

           expect(res.type).toMatch(/json/i)
        })
    })

    describe.only('get item by id ', () => {
        it('should return 200', async () => {
            res = await supertest(server)
                .get('/items/4').set({authorization: token});

           expect(res.status).toBe(200)
        });

        it('should return Json', async () => {
            res = await supertest(server)
                .get('/items/4').set({authorization: token});

           expect(res.type).toMatch(/json/i)
        })
    })
});


