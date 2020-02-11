/* 
    JavaScript program that is meant to check if user input is a pyramid word or not.
*/
window.onload = function() {
    let button = document.getElementById("button");

    button.onclick = function() {
        let userText = document.getElementById("userInput").value;
        let test = /\d/;

        if (test.test(userText) || userText.includes(" ")) {
            document.getElementById("result").innerHTML = "Not valid input.";
        } else {
            document.getElementById("result").innerHTML = "Valid";
        }
    }
}