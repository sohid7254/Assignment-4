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
// console.log(onlyCharacter("  h e llo wor   ld"));
// console.log(onlyCharacter("Cy   bar- At  tac k  "));
// console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
// console.log(onlyCharacter(["hack", "me"]));
// console.log(onlyCharacter(true));