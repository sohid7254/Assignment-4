// Problem-01 : Train TT's Fine Calculator
function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    let surCharge = fare * (20 / 100);
    let serviceCharge = 30;
    let fine = fare + surCharge + serviceCharge;

    return fine;
}

// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let noSpace = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            noSpace += str[i];
        }
    }

    result = noSpace.toUpperCase();
    return result;
}
