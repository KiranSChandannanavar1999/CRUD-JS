
let formId = document.getElementById('create-todo');
let fTodo = document.getElementById('todo');
let fCompleted = document.getElementById('completed');


let URL = 'https://dummyjson.com';

// to read query params from the url address
let urlIns = new URLSearchParams(window.location.search); // create instance to read url address
const params = new Proxy(urlIns, {
    get: (searchParams, prop) => searchParams.get(prop)
});

console.log('params todoId =', params.todoId);
console.log('params status =', params.status);

// read single data from server
const readSingle = async (id) => {
    await fetch(`${URL}/todos/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json"}
    }).then(res => res.json())
    .then(res => {
        console.log('todo =', res);
        fTodo.value = res.todo;
        fCompleted.value = res.completed ? "true": "false";
    }).catch(err => console.log(err.message));
}

(function () {
    readSingle(params.todoId)
})();