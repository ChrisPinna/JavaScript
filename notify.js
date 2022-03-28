const notifyByEmail = (email) => {
  return(`Email sent to : ${email}`);
}

const notifyByText = (number) => {
  return(`Text sent to: ${number}`);
} 

const notify = (argument, functionToUse) => {
  return(functionToUse(argument));
}

console.log(notify(234432, notifyByText));
