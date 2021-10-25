function exponentiation (userNum1, userNum2) {
    const result = userNum1 ** userNum2;
    return alert(result);
}

function multiplay (userNum1, userNum2) {
    const result = userNum1 * userNum2;
    return alert(result);
}

function division (userNum1, userNum2) {
    const result = userNum1 / userNum2;
    return alert(result);
}

function modulo (userNum1, userNum2) {
    const result = userNum1 % userNum2;
    return alert(result);
}


function mainFunction (callback) {
    let userNum1 = +prompt(`First number`);
    let userNum2 = +prompt(`Second number`);

    return callback(userNum1, userNum2);
}
mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);

