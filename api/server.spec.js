
const supertest = require('supertest');
const server = require('../api/server');


describe('server.js', () => {
    describe("get/",   () => {
        let res = {};
        beforeEach(async () => {
            res = await supertest(server).get('/')
        })
        it('should return 200 OK', async () => {
            expect(res.status).toBe(200);
        });
        it('should return JSON', async () => {
            expect(res.type).toMatch(/json/i);
        });
        it('should return up message', async () => {
            expect(res.body).toEqual({"API": "up"});
        })
    })
}) 