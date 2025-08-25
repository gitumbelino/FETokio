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
                const buttonText = todo.completed ? "Mark Complete" : "Mark Incomplete";
                todoList.innerHTML += `
                
                <div user-id=${todo.userId} 
                    todo-id=${todo.id} 
                    class= "todo ${completed}">
                    <div>${todo.title}</div>
                <div><button onclick="toggleCompletion()">${buttonText}</button>
                </div>
                </div>
                `;
            })
        })
}


toggleCompletion = (e) => {
    console.log(e)
}


window.onload = () => {
    loadTodos()
}


document.querySelector("form").addEventListener("submit", async (e) => {

    e.preventDefault()

    const title = e.target.title.value
    console.log(title)


    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, userId: "1", completed: false })
    });

    console.log(response)
    loadTodos()

})


