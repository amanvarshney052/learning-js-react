const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

for(const product of products){
    if(product.price>10000){
        console.log(`Product Name: ${product.name}`);
    }
}