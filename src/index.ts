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

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {  
    id: 1, 
    name: 'Leonel',
    retire: (date: Date) => {
        console.log(date);
    } 
};
employee.name = 'Leonel'

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal (exact, specific)

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}   

greet(undefined);

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//customers?.[0]

let log: any = null;
log?.('a');