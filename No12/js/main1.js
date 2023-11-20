const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")

function show_popup() {
    alert("Привет!");
}

btn1.addEventListener("mouseover", show_popup)
btn2.addEventListener("mouseover", show_popup)