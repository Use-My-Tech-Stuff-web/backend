
const supertest = require('supertest');
const server = require('../api/server');
const auth = require('./auth-router');

describe("auth-router.js", () => {

    describe('register/', () => {

        let res = {};

        beforeEach(async () => {
            res = await supertest(server)
            .post('/auth/register')
            .send({
                username:"elbeg4s4",
                password:"elbeg",
                role:'owner'
            });
        });

        it('should return 201 OK' , async () => {
            expect(res.status).toBe(201)
        });

        it('should return JSON', async () => {
            expect(res.type).toMatch(/json/i)
        });
    })
    describe('login/', () => {

        let res = {};

        beforeEach(async () => {
            res = await supertest(server)
            .post('/auth/login')
            .send({
                username:"elbeg1",
                password:"elbeg"
            });
        });

        it('should return 201 OK', async () => {
            expect(res.status).toBe(201)
        });

        it('should return JSON', async () => {
            expect(res.type).toMatch(/json/i)
        });

        it('should return Welcome message', async () => {
            expect(res.body.message).toBe('Welcome')
        });
    });
});