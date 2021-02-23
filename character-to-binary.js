
/**
 * Takes a string as input. 
 * Converts the string into its binary ASCII representation.
 * @param {string} inputString The string to be converted to binary.
 * @return {string} The input string converted to binary.
*/
function stringToBinary(inputString)
{
    // Our output.
    let output = "";

    // Looping through every letter in string.
    for (let i = 0 ; i < inputString.length ; i++)
    {
        // Getting letter's binary version.
        let tempBinary = (inputString[i]).charCodeAt(0).toString(2);

        // Prepending 0s until its 8 chars long. 
        if (tempBinary.length < 8)
        {
            let length = tempBinary.length
            for (let j = 0 ; j < 8 - length ; j++)
            {
                tempBinary = "0" + tempBinary;
            }
        }

        // Combining letters.
        output += tempBinary + " ";
    }

    // Returning result.
    return output;
}

/**
 * Takes a binary string as input, and converts it into human readable text.
 * @param {string} binaryInput A space separated string of characters in binary.
 * @returns {string} A string of human readable text.
 */
function binaryToString(binaryInput)
{
    let characters = binaryInput.split(" ");
    let output = "";

    // Converting each binary char into human readable char, and appending it.
    for (let i = 0 ; i  < characters.length ; i++)
    {
        // Check for empty string.
        if (characters[i] == "")
            continue;
        
        output += String.fromCharCode(parseInt(characters[i],2));
    }

    // Returning results
    return output;
}


let inputArea = document.getElementById("input-text-js");
let outputArea = document.getElementById("output-text-js");
        
inputArea.addEventListener("input",function() {
    let text = this.value;
    outputArea.value = stringToBinary(text);
});

outputArea.addEventListener("input",function() {
    let text = this.value;
    inputArea.value = binaryToString(text);
});