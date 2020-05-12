const enhancer = require('./enhancer.js');
// test away!

describe('* testing the enhancer file', () => {
    describe('testing the get function', () => {
        it('expect object to be defined', () => {
            expect(enhancer.get({name: 'Sword', durability: 50, enhancement: 10})).toBeDefined()
        })

        it('expect object to have property value of', () => {
            expect(enhancer.get({name: 'Bat', durability: 4, enhancement: 2})).toHaveProperty('enhancement', 2)
        })
    })    
})

//custom toBeInRange matcher
expect.extend({
    toBeInRange(received, floor, ceiling) {
        const pass = received >= floor && received <=ceiling;
            if(pass) {
                return {
                    message: () => `expected ${received} not to be in range ${floor} - ${ceiling}`,
                        pass: true,
                        };
            } else {
                return {
                     message: () => `expected ${received} to be in range ${floor} - ${ceiling}`,
                            pass: false,
                    };
                }
    }
});
    
describe('* testing custom matchers for enhancement and durability', () => {
    describe('item enhancement number range', () => {
        it('expect object to be in range of 0-20', () => {
            const enc = { enhancement: 20 }
            expect(enc.enhancement).toBeInRange(0, 20)   
        })
    })
    
    describe('item durability number range', () => {
        it('expect object to be in range of 0-100', () => {
            const dur = { durability: 90 }
            expect(dur.durability).toBeInRange(0, 100)
        })
    })
})