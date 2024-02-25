let sum = 0;
while (true) {
  let input = prompt("Nhập số (nhập 0 để kết thúc): ");
  let number = parseFloat(input);
  if (number === 0) {
    break;
  }
  if (number > 0) {
    sum += number;
  }
}
alert(`Tổng các số dương là: ${sum}`);
