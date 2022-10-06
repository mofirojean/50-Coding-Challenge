// Challenge 48: Create a function to return the longest
// word(s) in a string

function getTheLongestWord(text: string) {
    let words = getWords(text);

    let maxSize = 0;
    let maxPositon: number[] = [];

    for (let i = 0; i < words.length; i++) {
        let currWordSize = words[i].length;

        if (currWordSize > maxSize) {
            maxSize = currWordSize;
            maxPositon = [i];
        }
        else if (currWordSize === maxSize) {
            maxPositon.push(i)
        }
    }

    return getElements(words, maxPositon);
}

// Gets the elements frm specified positions from the array
function getElements(arr: string[], arPositions: number[]) {
    let arNew: string[] = [];

    for (let pos of arPositions) {
        arNew.push(arr[pos]);
    }

    return arNew;
}


// Returns an array with the words from specified text
function getWords(text: string): string[] {
    let startWord = -1
    let arr: string[] = []

    for (let i = 0; i <= text.length; i++) {
        let c = i < text.length ? text[i] : " ";

        if (!isSeperator(c) && startWord < 0) {
            startWord = i;
        }

        if (isSeperator(c) && startWord >= 0) {
            let word = text.substring(startWord, i);
            arr.push(word)

            startWord = -1;
        }
    }

    return arr;
}


// checks for seperators
function isSeperator(c: string) {
    let seperators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return seperators.includes(c);
}

// Driver Method
let text = "Create a function to return the longest word(s) in a string"
console.log(getTheLongestWord(text));
