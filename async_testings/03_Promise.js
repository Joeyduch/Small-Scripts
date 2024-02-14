
// Promised-based data fetching
function getData(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            console.log(request.readyState);
            if(request.readyState === 4) { // readystate 4 -> request completed
                if(request.status === 200) resolve(request.responseText); // status 200 -> success
                else reject("could not fetch data :(");
            }
        });
    
        request.open("GET", url);
        request.send();
    })
}


// Promise chaining
getData("https://jsonplaceholder.typicode.com/todos/").then(data => { // Promise 1 runs first even though we are fetching from slower source
    console.log("Getting Online Data");
    JSON.parse(data).forEach(element => {
        console.log(element);
    });

    return getData("offlineData/data01.json");

}).then(data => { // Promise 2
    console.log("Getting offline data 1");
    JSON.parse(data).forEach(element => {
        console.log(element);
    });

    return getData("offlineData/data02.json");

}).then(data => { // Promise 3
    console.log("Getting offline data 2");
    JSON.parse(data).forEach(element => {
        console.log(element);
    });

    // trying to reach invalid url to force catch an error
    return getData("wrong.url");

}).then(data => { // Promise 4 (shouldnt work)
    console.log("Stuff...");
    
}).catch(error => { // Error catch
    console.log("ERROR:", error);
})