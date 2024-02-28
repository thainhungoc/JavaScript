const str = prompt("Nhập vào một chuỗi bất kì");
let kq=[];
for(let i=0; i<=str.length; i++){
    for(let j=1; j<= str.length; j++){
        kq.push(str.slice(i, j));
    }
}
console.log(kq);
