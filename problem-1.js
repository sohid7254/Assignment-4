// Problem-01 : Train TT's Fine Calculator 
function totalFine(fare){
    if (typeof fare !== 'number' ||  fare <=0){
        return "Invalid";
    }
    let surCharge = fare * (20/100);
    let serviceCharge = 30;
    let fine = fare + surCharge + serviceCharge;
    return fine;
}

// console.log(totalFine(200));
// console.log(totalFine(0));
// console.log(totalFine(50));
// console.log(totalFine(552));
// console.log(totalFine(-35));
// console.log(totalFine("65"));
// console.log(totalFine("Gorib tai ticket katinai"));