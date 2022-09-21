// Challenge 32:Create a function that will capitalize the first letter of each
// word in a text

// toTitleCase function transform a string of text to titleCase
function toTitleCase (text: string): string {
    let words: string[] = text.split(" ");
    for (let i = 0; i < words.length; i++){
        let newWord = `${words[i].slice(0, 1).toUpperCase()}${words[i].slice(1, words[i].length).toLowerCase()}`
        words[i] = newWord;
    }
    return words.join(" ");
}

// Driver Method
let str = "my dear friends";
console.log(toTitleCase(str));
