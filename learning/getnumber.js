const getNumberSign = (number) => {
  if (number > 0) {
    console.log('positive')
  } else if (number < 0) {
    console.log('negative')
  } else {
    console.log('zero')
  }
};

module.exports = getNumberSign;
