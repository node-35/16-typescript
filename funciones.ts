const sum = (a: number, b: number): number => {
    return a + b;
}

const result2: number = sum(10, 5);


type evenValue = 'IMPAR' | 'PAR'

const getEven = (n: number): evenValue => {
    if (n % 2 !== 0) return 'IMPAR';
    return 'PAR';
}

const result3 = getEven(5);
