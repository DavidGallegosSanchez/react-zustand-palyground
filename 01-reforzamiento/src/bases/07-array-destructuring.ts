const characterNames = ['Goku', 'Vegeta', 'Trunks'];


const [ p1, p2, p3 ] = characterNames;
console.log({p1, p2, p3});


// only want second character
const [ , vegeta ] = characterNames;
console.log({ vegeta });

// only want third character
const [ , , trunks ] = characterNames;
console.log({ trunks });


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [ letters, numbers ] = returnsArrayFn();
console.log(letters, numbers);



const useState = (name: string) => {
    return [
        name, 
        (n: string) => {
            console.log(n)
    }, 
    ] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');
