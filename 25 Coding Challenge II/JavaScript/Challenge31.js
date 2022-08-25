// Challenge 31: Create a function that will return the number of words in a text


// Checks for the presence of a seperator
function isSeprator(char){
    let seperators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return seperators.includes(char);
}

// counts the number of words in a text
function countWord(text){
    let wasSeperator = true;
    let words = 0;

    for (let char of text){
        // if current character is a seperator then advance and 
        // set that the previous character seperator

        if (isSeprator(char)){
            wasSeperator = true;
            continue;
        }
        
        // if  current character is not seperator
        // but if previouse was seperator
        if (wasSeperator){
            words++;
            wasSeperator = false;
        }
    }

    return words
}


// Driver method
console.log(countWord(""));
console.log(countWord("            "));
console.log(countWord("  Hello World  "));
console.log(countWord(" JavaScript is great"));
