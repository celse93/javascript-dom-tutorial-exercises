// Your code here
document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.matches(".fa-trash")) {
        e.target.parentElement.parentElement.remove();
    }
})

document.querySelector("#addToDo").addEventListener("change", (e) => {
    let list = document.querySelector("ul");
    let newTask = e.target.value;
    let newLi = document.createElement("li");
    
    newLi.innerHTML += `<span><i class="fa fa-trash"></i></span> ${newTask}`;
    
    list.append(newLi);

    document.querySelector("#addToDo").value = "";
})
