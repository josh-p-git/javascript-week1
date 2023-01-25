const executeAfterDelay = (seconds, chosenFunction) => {
  setTimeout(chosenFunction, seconds);
}

const printHello = () => {
  console.log('Hello!');
}

console.log(executeAfterDelay(6000, printHello));
