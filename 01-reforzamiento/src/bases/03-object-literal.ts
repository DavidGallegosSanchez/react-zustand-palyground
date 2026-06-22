interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    city: string;
    postalCode: number;
}

const ironMan: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        postalCode: 123
    }
}

// Only first level (address is the same for both)
const spiderMan = { ...ironMan };

spiderMan.firstName = 'Peter';
spiderMan.lastName = 'Parker';
spiderMan.age = 22;
spiderMan.address.city = 'Texas';

console.log(ironMan, spiderMan);

// Deep clone
const spiderManDeepClone = structuredClone(ironMan);

spiderManDeepClone.firstName = 'Peter';
spiderManDeepClone.lastName = 'Parker';
spiderManDeepClone.age = 22;
spiderManDeepClone.address.city = 'Las Vegas';

console.log(ironMan, spiderManDeepClone);
