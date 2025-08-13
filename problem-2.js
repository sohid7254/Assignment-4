// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str){
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
// console.log(onlyCharacter("Serv er : : Do wn"));