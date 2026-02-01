function biggerClicked() {
    document.getElementById("text").style.fontSize = "24pt";
}

function setFancy(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";    
}

function setBoring(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";    
}

function mooClicked(){
    var textArea = document.getElementById("text");
    textArea.value = textArea.value.toUpperCase(); //uppercase

    var upperCaseTV = textArea.value;
    var parts = upperCaseTV.split(".");//split where sentence ends
    upperCaseTV = parts.join("-MOO.");//replace . with -MOO because instructions assume that a sentence ends only with .

    textArea.value = upperCaseTV;//update the page
}