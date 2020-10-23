const db = require('../database/db.config');
const itemMid = require('../middleware/item-mid');
const Items = require('./item-model');

describe('items model', () => {
    describe('get', () => {
        it('should return all items that are in the DB', async () => {
            Items.getItem()
            .then(res => {
                expect(res).toHaveLength(3);
            });  
        });
        it("should return item by id", async () => {
            await Items.getById(1)
            .then(res => {
                expect(res).toMatchObject({
                    id: 1,
                  });
            });
        });
        it('should update the item by id', async () => {
            const changes = {
                description: "testtest" 
            };
            await Items.update(2,changes)
            .then(res => {
                Items.getById(2)
                .then(res => {
                    expect(res.description).toBe('testtest');
                });
            });
        });
        it('should remove item by id', async() => {
            Items.remove(2)
            .then(res => {
                Items.getItem()
                .then(res => {
                    expect(res).toHaveLength(3)
                })
            })
        })
    })
})