// Problem-04: Same Same But Different 
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1 === null || arr2 === null){
        return "Invalid";
    } else {
        if(arr1.length !== arr2.length){
            return false;
        }
        else{
            for(let i = 0; i < arr1.length; i++){
                if(arr1[i] !== arr2[i]){
                    return false;
                }
            }
            return true;
        }
    }
    
}

console.log(isSame([34, 5, 7, 9], [34, 5, 7]));