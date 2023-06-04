const numbersOnly = (e) => {
  const result = e.target.value.replace(/[^0-9]/gi, '');
  return result;
};
const numberWithComma = (e) => {
  const result = e.target.value.replace(/[^0-9,]/gi, '');
  return result;
};

const alphaNumericAndSpecialChars = (e) => {
  const result = e.target.value.replace(/[^0-9a-z@,!?. ]/gi, '');
  return result;
};

export { numbersOnly, numberWithComma, alphaNumericAndSpecialChars };
