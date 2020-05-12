const enhancer = require('./enhancer.js');
// test away!

describe('* Testing the enhancer file', () => {
    describe('testing get() method  on use before stretch', () => {
        it('expect object to be defined', () => {
            expect(enhancer.get({ name: 'Sword', durability: 50, enhancement: 10 })).toBeDefined()
        })

        it('expect object to have property value of', () => {
            expect(enhancer.get(
                { name: 'Bat', durability: 4, enhancement: 2 }
            )).toHaveProperty('enhancement', 2)
        })

    })

    describe('testing repair() method on accept object', () => {
        it('expect durability object restored to 100', () => {
            const myobj = {name: 'Numb-Chucks', durability: 100, enhancement: 10}
            expect(enhancer.repair(
                {name: 'Numb-Chucks', durability: 90, enhancement: 10}
            )).toMatchObject(myobj)
        })
    })

});

describe('* Testing the item object' ,() => {

    it('expect objects to be in rage of', () => {
        // const encRange = 20
        // const durRange =  100
        const item = {
            name: 'Numb-Chucks',
            durability: 21,
            enhancement: 12
        }

        const itemArray = [{
            name: 'Ninja Star',
            durability: 97,
            enhancement: 5
        }, {
            name: 'Batton',
            durability: 12,
            enhancement: 0
        }]


        expect(item.durability).toBeInRange(0, 100)
        expect(item.enhancement).toBeInRange(0, 20)
        expect(itemArray[0].durability).toBeInRange(0, 100)
    })
})
describe('* Testing custom matchers for enhancement and durability', () => {
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
});

/*
matcher: @toBeInRange
*/
expect.extend({
    toBeInRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () => `expected ${received} not to be in range ${floor} - ${ceiling}`,
                pass: true,
            };
        }
        else {
            return {
                message: () => `expected ${received} to be in range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    }
});
