
function isRequired(value){
    return value===""?false:true
}

function isBetween(length,min,max){
    return length > min && length < max;
}

function isValidPassword(value){
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);
}


export { 
    isRequired,
    isBetween,
    isValidPassword
};
