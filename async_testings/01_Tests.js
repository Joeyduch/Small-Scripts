
// testing and showing how async (setTimeout / fetch) functions work

let element = document.querySelector("#title");

element.innerHTML = 1;
element.innerHTML = 2;

setTimeout(() => {
    element.innerHTML = "Timeout";
}, 1000);

fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => element.innerHTML = json.title);

element.innerHTML = 3;
element.innerHTML = 4;