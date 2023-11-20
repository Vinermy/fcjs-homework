const first = document.getElementById("first");
const second = document.getElementById("second");

function alert_1() {
    alert(first.id);
}

function alert_2() {
    alert(second.innerHTML)
}

first.addEventListener("click", alert_1)
second.addEventListener("click", alert_2)
