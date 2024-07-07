let numbers = [1,2,3,4,5,6,7]

let fn = numbers.find(e => e % 2 ===0);
// console.log(fn);

let customers = [
    {
        name: 'Sohel Rana',
        credit: 100
    },
    {
        name: 'John Doe',
        credit: 200
    },
    {
        name: 'Ryan Dahl',
        credit: 300
    }
]

let findC = customers.find(c => c.credit > 200)
// console.log(findC);

const products = [
    { name: 'Phone', price: 999 },
    { name: 'Computer', price: 1999 },
    { name: 'Tablet', price: 995 },
  ];
  
  const index = products.findIndex(product => product.price > 1000);
  
  console.log(index); // 1