/* 
    JavaScript function that is meant to check if user input is a pyramid word or not.
*/

// Function that checks to see if userInput is valid. Then calls PyramidCheck() if
// user entered a proper word.
function validateForm() {
    let userText = document.getElementById("userInput").value;
    let test = /\d/;

    if (test.test(userText) || userText.includes(" ")) {
        document.getElementById("result").innerHTML = "Not Valid input";
    } else {
        document.getElementById("result").innerHTML = "Test";
    }
}