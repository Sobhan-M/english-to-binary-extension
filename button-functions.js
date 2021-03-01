
/**
 * Copies the text within the element that calls this function and saves it to the clipboard.
 */
function copyBinary()
{
    let binaryField = document.getElementById("output-text-js");
    binaryField.select();
    document.execCommand("copy");
}

/**
 * Resets the text in both fields after confirming it with the user.
 * Currently unused because it makes resetting through the button annoying.
 */
function resetText()
{
    let binaryField = document.getElementById("output-text-js");
    let textField = document.getElementById("input-text-js");

    let response = confirm("Are you sure you want to reset both text fields?");
    
    if (response)
    {
        binaryField.value = "";
        textField.value = "";
    }
}

document.getElementById("copy-binary-button").addEventListener("click", copyBinary);

