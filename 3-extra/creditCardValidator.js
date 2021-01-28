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
console.log(cardNumber.length);
let cardNumbertoArray = cardNumber.split(""); //forms an array of strings
let makeNumber = cardNumbertoArray.map((Arrayitem) => Number(Arrayitem)); // converts array elements to numbers

function addDigits(arr) {
  //calculates the sum of all the digits
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return "CardNumber summation: " + (sum > 16);
}
function checkDuplicate(arr) {
  return arr === makeNumber[0];
}
console.log(addDigits(makeNumber));
console.log(getLastDigit(makeNumber));
console.log(numberLength(makeNumber));
console.log(noString(cardNumber));
console.log(makeNumber.every(checkDuplicate));
