const app = document.getElementById("append")
const pre = document.getElementById("prepend")
const list = document.getElementById("list")

function append() {
    el = document.createElement("li")
    el.innerText = "Элемент в конце"
    list.append(el)
}
function prepend() {
    el = document.createElement("li")
    el.innerText = "Элемент в начале"
    list.prepend(el)
}

app.addEventListener("click", append)
pre.addEventListener("click", prepend)

