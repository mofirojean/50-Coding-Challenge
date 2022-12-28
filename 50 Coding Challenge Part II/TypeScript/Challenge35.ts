// Challenge 35: Create a function to convert a CSV text to a “bi-dimensional” array

function csvToArray(data: string): string[] {
    let arLines: string[] = data.split("\n");

    for (let i = 0; i <  arLines.length; i++){
        let arLine = arLines[i].split(";");
        arLines[i] = arLine
    }

    return arLines;
}

// Driver Method
let data = "John;Smith;954-000-0000\n" + "Mich;Tiger;305-000-0000\n" + "Monique;Vasquez;103-000-0000";
console.log(JSON.stringify(csvToArray(data)))