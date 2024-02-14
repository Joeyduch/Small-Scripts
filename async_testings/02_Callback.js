
// function making the request
function getJsonElements(sourceUrl, callback) {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200) { // readyState 4 -> completed | status 200 -> success
            const jsonResponse = JSON.parse(request.responseText);
            let elementArray = [];
            
            jsonResponse.forEach(element => {
                elementArray.push(element);
            });
            callback(undefined, elementArray);
        }
        else if(request.readyState === 4) {
            callback("could not fetch data", undefined);
        }
    });

    request.open("GET", sourceUrl);
    request.send(); 
};



/*
    RUN
*/

console.log("= 1 =");
console.log("= 2 =");

// asynchronous code - online
getJsonElements("https://jsonplaceholder.typicode.com/todos/", (err, data) => { 
    if(err) {
        console.log("ERROR:", err);
    }
    else {
        console.log("=== ONLINE FETCH ===");
        data.forEach((jsonObject) => {
            console.log(`title is: ${jsonObject.title}`);
        });
    }
});

// asynchronous code - offline, normally this logs before the function call above because its faster to get data locally
getJsonElements("offlineData/data01.json", (err, data) => { 
    if(err) {
        console.log("ERROR:", err);
    }
    else {
        console.log("=== OFFLINE FETCH ===");
        data.forEach((jsonObject) => {
            console.log(`> Text from ${jsonObject.from}: ${jsonObject.text}`);
        });
    }
});

console.log("= 3 =");
console.log("= 4 =");



