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
