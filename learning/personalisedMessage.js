const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (name) => {
  console.log(`Hi ${name.name}! ${name.discount}% off our best candies for you today`)
};

const map1 = namesAndDiscounts.map((name) => {
  return generateMessages(name)
});

console.log(map1)
