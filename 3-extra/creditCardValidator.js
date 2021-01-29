function numberLength(cardNumber) {
  //checks the length of the card number
  return "The length of the card number is 16: " + (cardNumber.length === 16);
}
function noString(cardNumber) {
  // checks if the card number has no strings
  let noString = cardNumber.match(/[a-zA-Z]/g);
  if (noString === null) {
    return "Digit varification succesfully";
  } else {
    return "Digit varification failed";
  }
}
function getLastDigit(cardNumber) {
  // checks if last digit is even
  return (
    "Last Digit is an even number: " +
    (cardNumber[cardNumber.length - 1] % 2 === 0)
  );
}
let cardNumber = "1111111111111111";
let cardNumbertoArray = cardNumber.split(""); //forms an array of strings
let makeNumber = cardNumbertoArray.map((Arrayitem) => Number(Arrayitem)); // converts array elements to numbers
console.log(getLastDigit(makeNumber));
console.log(numberLength(makeNumber));
console.log(noString(cardNumber));
console.log(makeNumber.every(checkDuplicate));

function cardNumberValidation(cardNumber) {
  let cardNumbertoArray = cardNumber.split(""); //forms an array of strings
  let makeNumber = cardNumbertoArray.map((Arrayitem) => Number(Arrayitem)); // converts array elements to numbers
  let sum = makeNumber.reduce((a, b) => a + b); // sums all the value of the array
  let dublicate = makeNumber.every((num) => num === makeNumber[0]); // checks if there are different numbers in the card number
}
console.log(cardNumberValidation("1111111111111111"));
