var num = prompt("Nhập vào một số bất kỳ");
if(Number.isInteger(Number(num))){
    if(num % 2 == 0 ){
        alert("Số chẵn");
    }else if(num % 2 != 0){
        alert("Số lẻ");
    }
}else{
    alert("Không hợp lệ");
}
// if(num % 2 == 0 ){
//     alert("Số chẵn");
// }else if(num % 2 != 0){
//     alert("Số lẻ");
// }else{
//     alert("Không hợp lệ");
// }
// }else if(Number.isInteger(Number(num))){
//     alert("Không hợp lệ");
// }