// Challenge 34: Create a function that will return an array with words inside a text

// Checks for the presence of a seperator
function isSeprator(char: string){
    let seperators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return seperators.includes(char);
}

function getWords(text: string): string[] {
    let startWord: number = -1;
    let ar: string[] = [];

    for(let i = 0; i <= text.length; i++){
        let c: string = i < text.length ? text[i] : " ";

        if (!isSeprator(c) && startWord < 0) startWord = i;

        if (isSeprator(c) && startWord >= 0){
            let word: string = text.substring(startWord, i);
            ar.push(word);

            startWord = -1;
        }
    }

    return ar;
}

