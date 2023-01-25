const addToBatch = (array, number) => {
  if (array.length <= 4) {
    let newarray = (array.concat(number));
    console.log(newarray)
  } else {
    console.log(array)
  }
};

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
