function greet(name: string): string {
    return `Hola ${name}`;
}

/*
const greet2 = (name: string): string => {
    return `Hola ${name}`;
}
*/

const greet2 = (name: string) => `Hola ${name}`;


const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

function getUser() {
    return {
        uid: 'DBZ-123',
        userName: 'Cell',
    };
}

const user = getUser();
console.log(user);

interface User {
    uid: string;
    userName: string;
}

/*
const getUser2 = (): User => {
    return {
        uid: 'DBZ-123',
        userName: 'Freezer',
    };
}
*/

const getUser2 = (): User => ({    
        uid: 'DBZ-123',
        userName: 'Freezer',
});

const user2 = getUser2();
console.log(user2);

const myArray: number[] = [1, 2, 3, 4];

myArray.forEach( num => console.log(num));