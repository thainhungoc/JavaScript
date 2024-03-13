const listName = ["Thái Như Ngọc", "Lương Hoàng Bảo Trân"];
const text = document.getElementById("list");
listName.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  text.appendChild(li);
  console.log(li);
});
