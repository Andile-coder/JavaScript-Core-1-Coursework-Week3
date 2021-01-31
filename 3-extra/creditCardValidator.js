function noString(cardNumber) {
  // checks if the card number has no strings
  let noString = cardNumber.match(/[a-zA-Z]/g);
  if (noString === null) {
    return "card number only has numbers: PASSED";
  } else {
    return "card number only has numbers: FAILED";
  }
}
function getLastDigit(cardNumber) {
  // checks if last digit is even
  return (
    "Last Digit is an even number: " +
    (cardNumber[cardNumber.length - 1] % 2 === 0)
  );
}
function cardNumberValidation(cardNumber) {
  let cardNumbertoArray = cardNumber.split(""); //forms an array of strings
  let makeNumber = cardNumbertoArray.map((Arrayitem) => Number(Arrayitem)); // converts array elements to numbers
  let sum =
    "the card number digits sum to: " + makeNumber.reduce((a, b) => a + b); // sums all the value of the array
  let duplicate = makeNumber.every(
    (num) => `The card number only has one digit: ${num === makeNumber[0]}`
  ); // checks if there are different numbers in the card number
  let length = `The length of the card number is 16: ${
    cardNumber.length === 16
  }`;

  return `${length}\n${noString(cardNumber)}\n${duplicate}\n${getLastDigit(
    makeNumber
  )}\n${sum}`;
}
console.log(cardNumberValidation("1111111111111111"));
