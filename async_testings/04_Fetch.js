
// using fetch api (integrated in vanilla js) to streamline data fetching

fetch("https://jsonplaceholder.typicode.com/todos/").then(response => {
    if(response.status != 200) throw "Cannot fetch data :/";
    return response.json() // return a promise containing the json data from the response object
}).then(data => {
    // print all titles
    data.forEach(element => {
        console.log(element.title);
    })
}).catch(error => {
    console.log("ERROR:", error);
})