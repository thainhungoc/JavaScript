function kiemTraDoDai() {
  const Answer = document.getElementById("answer");
  const texxt = document.getElementById("message");
  var ans = Answer.value.trim(); // Lấy giá trị và loại bỏ khoảng trắng đầu cuối
  if (ans.length < 10) {
    message.textContent =
      "Câu trả lời không hợp lệ, Vui lòng nhập đọ dài lớn hơn 10 ký tự";
    message.style.color = "red";
  } else {
    message.textContent = "Nhập thành công";
    message.style.color = "green";
  }
}
