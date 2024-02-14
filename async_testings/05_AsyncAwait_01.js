
// async example 1

async function myAsyncFunc(url) {
    console.log("- 1 -");
    console.log("- 2 -");

    // using await INSIDE an async function makes the sync code stop awaiting for the async code to complete
    const fetchData = await fetch(url).then(response => {
        if(response.status != 200) throw "Cannot fetch data :/";
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("ERROR:", error);
    })

    console.log("- 3 -");
    console.log("- 4 -");
}



// asynchronous code f*ckery preview

const dataURL = "https://jsonplaceholder.typicode.com/todos/";

console.log("== start ==");

myAsyncFunc(dataURL);

console.log("== end ==");