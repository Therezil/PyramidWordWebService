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
            return false;
        } else {
            if (isPyramidWord(userText)) {
                document.getElementById("result").innerHTML = "This is a pyramid word.";
            } else {
                document.getElementById("result").innerHTML = "This is not a pyramid word.";
            }
        }
    }
}

function isPyramidWord(userText) {
    let charsTracker = [];
    let charsCount = [];

    for (i = 0; i < userText.length; ++i) {
        if (charsTracker.includes(userText.charAt(i))) {
            let j = charsTracker.indexOf(userText.charAt(i));

            charsCount[j]++;
        } else {
            charsTracker.push(chars[i]);
            charsCount.push(1);
        }
    }
    
    document.getElementById("result").innerHTML = charsTracker.toString();
    document.getElementById("result").innerHTML = charsCount.toString();
    return true;
}