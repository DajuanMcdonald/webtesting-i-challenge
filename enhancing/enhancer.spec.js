const enhancer = require('./enhancer.js');
// test away!
describe('testing the enhancer file', () => {
    describe('testing the get function', () => {
        it('expect object to be defined', () => {
            expect(enhancer.get({name: 'Sword', durability: 50, enhancement: 10})).toBeDefined()
        })

        it('expect object to have property value of', () => {
            expect(enhancer.get({name: 'Bat', durability: 4, enhancement: 2})).toHaveProperty('enhancement', 2)
        })
    })
})