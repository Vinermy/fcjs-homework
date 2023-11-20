const paragraph = document.getElementById("paragraph")
const button = document.getElementById("switch")

function turn() {
    if(paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

button.addEventListener("mouseup", turn)