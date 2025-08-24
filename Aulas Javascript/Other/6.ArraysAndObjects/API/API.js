const form = document.querySelector("form");
const todoList = document.querySelector(".todos");
const apiUrl = `http://localhost:4000/todos`;


const loadTodos = () => {

    todoList.innerHTML = ""

    fetch(apiUrl)
    .then(response => response.json())
    .then(todos => {
        
        todos.slice(0, 5).forEach(todo => {

            const completed = todo.completed ? "completed" : "incompleted"
            todoList.innerHTML += `<div class= "todo ${completed}">${todo.title}
            </div>`  
        })  
    })
}



document.querySelector("form").addEventListener("submit", async  (e) => {

    e.preventDefault()  
    const name = e.target.title.value
    console.log(name)


    const response = await fetch("https://example.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "example" }),
        // …
      });

})
