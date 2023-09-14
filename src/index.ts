let sales: number = 123_456_789; // number
let course: string = 'TypeScript'; // string
let is_published: boolean = true; // true
let level; // any

function render(document: any) {
    console.log(document)
}

let numbers: number[] = [1, 2, 3]
numbers.forEach(n => n.toExponential)

let user: [number, string, Boolean, number] = [1, 'Leonel', true, 0]

const enum Size { Small = 1, Medium, Large }; // pag const mas optimize yung js code
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000)

let employee: { 
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Leonel',
    retire: (date: Date) => {
        console.log(date);
    } 
};
employee.name = 'Leonel'
