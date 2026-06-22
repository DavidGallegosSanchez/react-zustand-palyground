const myArray: number[] = [1, 2, 3, 4, 5, 6];
// const myArray: (number | string)[] = [1, 2, 3, 4, 5, 6];

myArray.push(10);
myArray.push(11);

console.log(myArray);

for(const myNumber of myArray) {
    console.log(myNumber + 10);
}

const myArray2 = myArray;
myArray2.push(29);
console.log(myArray, myArray2);

const myArray3 = [...myArray];
myArray3.push(46);
console.log(myArray, myArray3);
