
// async example 2

async function fetchAllData(fetchArray) {
    if(!Array.isArray(fetchArray)) throw new Error("arg is not an array");

    let data = [];

    fetchArray.forEach(async url => {
        const response = await fetch(url);
        if(response.status != 200) throw new Error("cannot fetch data");

        const _data = await response.json();
        _data.forEach(element => {
            data.push(element);
        })
    })

    return data;
}

const fetchList = [
    "https://jsonplaceholder.typicode.com/todos/",
    "offlineData/data01.json",
    "offlineData/data02.json",
]


console.log("= 1 =");
console.log("= 2 =");

fetchAllData(fetchList)
    .then(data => console.log(data))
    .catch(error => console.log("ERROR:", error));

console.log("= 3 =");
console.log("= 4 =");

