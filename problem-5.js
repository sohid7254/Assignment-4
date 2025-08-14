// Problem-05: Exam Result Report Generator
function resultReport(marks) {
    if (!Array.isArray(marks)){
        return "Invalid";
    }

    let sum = 0;
    let passed = 0;
    
    for(let mark of marks){
        sum += mark;
        if(mark >= 40){
            passed++;
        }
    }

    let finalScore = marks.length ? Math.round(sum / marks.length) : 0;
    let fail = marks.length - passed;
    let pass = passed;

    return {finalScore, pass, fail };
}

// console.log(resultReport([]));
// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
// console.log(resultReport([99, 87, 67, 12, 87]));
// console.log(resultReport([99]));
// console.log(resultReport(100));