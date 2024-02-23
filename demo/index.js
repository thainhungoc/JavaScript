// const diem= Number(prompt("Nhập điểm của học sinh"));
// if(diem >= 8){
//     alert("học sinh giỏi");
// }else if(diem >= 6){
//     alert("học sinh khá");
// }else if(diem >= 5){
//     alert("học sinh trung bình");
// }else{
//     alert("học sinh yếu");


const time= Number(prompt("Nhập vào số giờ trong ngày"));
if(time <= 10){
    time= 1
}else if(time < 20){
    time = 2
}else if(time >= 23){
    time = 3
}
switch(time){
    case 1:
        alert("Good morning")
        break;
    case 2:
        alert("Good day")
        break;
    case 3:
        alert("Good evening")
        break;
    default:
        alert("Giờ không hợp lệ vui lòng nhập lại")        
}
// var time = new Date().getHours();
// console.log (new Date().getHours());

// switch (true) {
//         case (time < 10):
//                 alert('Good morning');
//                 break;
//         case (time < 20):
//                 alert('Good day');
//                 break;
//         case (time > 20):
//                 alert('Giờ không hợp lệ');
//                 break;
//         default:
//                 alert('Giờ không hợp lệ');
// }
