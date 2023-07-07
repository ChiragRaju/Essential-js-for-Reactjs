fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
//we can see first chirag is printed then the fetch api because it is waiting
// const data = "chirag";
// console.log(data);

//async-await function
const url = "https://jsonplaceholder.typicode.com/todos/1";
async function getTodos() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
