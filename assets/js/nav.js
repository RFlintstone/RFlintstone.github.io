function myFunction(x) {
    x.classList.toggle("change");
}

function displaycheck() {
    var displaycheck = document.getElementById("nav").style.display;

    document.getElementById("nav").style.display = "inline-block";

    if (displaycheck === "none") {
        // alert("none");
        document.getElementById("nav").style.display = "inline-block";
    }
    if (displaycheck === "inline-block"){
        // alert("inline-block");
        document.getElementById("nav").style.display = "none";
    }

}