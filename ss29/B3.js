function countNonEmptyCharacters(chuoi){
    let count=0;
    for(let i=0; i<= chuoi.length ; i++){
        if(chuoi.length[i] !== ""){
            count++;
        }
    }
    return count;
}
const str ="Xin chào các bạn";
const result = countNonEmptyCharacters(str);
console.log(`Số ký tự trong chuỗi không tính khoảng cách là: ${result}`);