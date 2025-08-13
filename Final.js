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

// Problem-03 : FIFA Best Team Award 
function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

    if(total1 < total2){
        return player1.name;
    }
    if(total2 < total1){
        return player2.name;
    }
    if (total1 === total2){
        return "Tie";
    }
}