const form = document.querySelector("form");
const todoList = document.querySelector(".todos");
const apiUrl = `http://localhost:4000/todos`;




const loadTodos = () => {

    todoList.innerHTML = ""

    fetch(apiUrl)
        .then(response => response.json())
        .then(todos => {

            todos.forEach(todo => {

                const completed = todo.completed ? "completed" : "incompleted"
                const buttonText = todo.completed ? "Mark Incomplete" : "Mark Complete";
                todoList.innerHTML += `
                
                <div user-id=${todo.userId} 
                    todo-id=${todo.id} 
                    class= "todo ${completed}">
                    <div>${todo.title}</div>
                <div><button onclick="toggleCompletion('${todo.id}', ${todo.completed})">
                ${buttonText}
                </button>
                </div>
                </div>
                `;
            })
        })
}



async function toggleCompletion(id, completed) {

    await fetch(`${apiUrl}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !completed })
    });
    loadTodos();
}


form.addEventListener("submit", async e => {

    e.preventDefault();

    const titleInput = document.querySelector("#title");
    const title = titleInput.value.trim();

    if (!title) return;


    await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, userId: "1", completed: false })
    });


    titleInput.value = ""
    loadTodos()

})

window.onload = loadTodos;


