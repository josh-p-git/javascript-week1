const lowercaseMessage = (word) => {
  return word.toLowerCase();
}

const transform = (word, transformFunction) => {
  return transformFunction(word);
}

module.exports = lowercaseMessage
module.exports = transform
