var a= prompt("Nhập vào số nguyên dương a");
var b = prompt("NHập vào số nguyên dương b");
a = Number(a);
b = Number(b);
let arr=[];
if(a>b){
    for(let i=1; i<=a; i++){
        if(i % b == 0){
            arr.push(i);
        }
    }
}else{
    for(let i=1; i<=b; i++){
        if(i % a == 0){
            arr.push(i)
        }
    }
}
console.log(arr);