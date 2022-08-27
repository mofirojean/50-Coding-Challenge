// Challenge 34: Create a function that will return an array with words inside a text

// Checks for the presence of a seperator
function isSeprator(char){
    let seperators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return seperators.includes(char);
}

function getWords(text){
    let startWord = -1;
    let ar = [];

    for(let i = 0; i <= text.length; i++){
        let c = i < text.length ? text[i] : " ";

        if (!isSeprator(c) && startWord < 0) startWord = i;

        if (isSeprator(c) && startWord >= 0){
            let word = text.substring(startWord, i);
            ar.push(word);

            startWord = -1;
        }
    }

    return ar;
}



// Challenge 34b: Another Approach
/**
 * first replace all non-alphanumericals with a whitespace 
 * next we remove whitespaces at the beginninh and at the end of our string
 * we then convert the string into an array
 */
const getWords2 = text => text.replace(/[^A-Za-z0-9]+/g, " ").trim().split(" ");


// Driver Method
let text = "Create a function, that will return an array with words inside a text "
console.log(getWords(text));
console.log(getWords2(text));

