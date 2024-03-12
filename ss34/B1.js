const listItem = ["list item number 1", "list item number 2", "list item number 3"];
const text = document.getElementById("list");
listItem.forEach(item => {
const li = document.createElement('li');
li.textContent = item;
text.appendChild(li);
console.log(li);
});