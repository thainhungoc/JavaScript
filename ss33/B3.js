const num = Number(prompt("Nhập vào số lượng sinh viên muốn thêm"));
let arr = [];
for(let i=0; i<=num; i++){
    prompt("Nhập vào thông tin sinh viên thứ ", i+1);
    if(i>num){
        i-1;
    }
    // arr.push(i);
}
console.log(arr);
