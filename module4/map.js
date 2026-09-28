// const numbers=[1,2,3,4,5];
// const doubled= numbers.map(num=>num*2);
// console.log(doubled);

// const numbers=[8,3,5,1,9];
// numbers.sort();
// console.log (numbers);

const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 }
];

const p=products.sort((a, b) => a.price - b.price).map(prod=>prod.price );
console.log(p);