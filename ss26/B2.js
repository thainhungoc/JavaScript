const arr = [1,2,3,4,5,6,7];
let search = parseInt(prompt("Nhập vào giá trị cần tìm kiếm (1-7)"));
let searchArr= arr.indexOf(search);
if(searchArr !== -1){
    console.log(`Phần tử ${search} được tìm thấy tại vị trí ${searchArr}.`);
} else {
    console.log("Phần tử không tồn tại trong mảng");
}