const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    paintToDo(newToDo);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
