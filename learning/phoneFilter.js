const checkLength = (number) => {
  if ((number.length) <= 10) {
    return true
  } else {
    return false
  }
};

const filterLongNumbers = (listOfNumbers) => {
  listOfNumbers.forEach(element => {
    if (checkLength(element) === true) {
      return console.log(element)
    } else {
      return
    }
  });
};

console.log(filterLongNumbers(['1763687364', '4763687363', '7867867862', '12345678910']));
