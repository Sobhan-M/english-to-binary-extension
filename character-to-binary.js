// let myString = "Hello world. \nOkay.";

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

        // Combining letters
        output += tempBinary + " ";
    }

    // Returning result.
    return output;
}


let inputArea = document.getElementById("input-text-js");
let outputArea = document.getElementById("output-text-js");
        
inputArea.addEventListener("input",function() {
    let text = this.value;
    outputArea.value = stringToBinary(text);
});