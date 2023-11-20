const btn = document.getElementById("add-button");
const input = document.getElementById("task");
const list = document.getElementById("todo-list");



function add_new_task() {
    text = input.value;
    el = document.createElement("li");
    el.innerHTML = "<span>" + text + "</span><button class=\"remove-button\">Удалить</button>";
    el.lastChild.addEventListener("click", () => el.lastChild.parentElement.remove())
    list.append(el);
}

btn.addEventListener("click", add_new_task);
