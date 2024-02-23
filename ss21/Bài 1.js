var year=2024;
var answer = prompt("Bạn sinh năm bao nhiêu ?");
if(Number.isInteger(Number(answer))){
    var age = year - answer;
    alert("Tuổi của bạn là "+age);
}else{
    alert("Giá trị không hợp lệ vui lòng nhập lại");
}