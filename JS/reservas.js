document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("info1").style.display = "block";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";

});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "block";
    document.getElementById("info3").style.display = "none";

});

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "block";

});