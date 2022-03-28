const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.toString().length() === validLength) {
    return(true);
  } else {
    return(false);
  }
}

console.log(isValidLength(2419842340));
