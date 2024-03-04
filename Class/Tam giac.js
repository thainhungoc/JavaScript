const array = Number(prompt("Nhập vào số lượng phần tử trong mảng"));
let arr =[];
for(let i=0; i<= array; i++){
    num = Number(prompt("Nhập vào phần tử thứ " +(i+1)+ " của mảng"));
   arr.push(num);
}
function tamGiac(arr){
    arr.sort((a, b)=> a-b);
    let count = 0;
    let n = arr.length;
    for(let i=0; i < n-2; i++){
        let k= i+2;
        for(let j=i+1; i< n-1; j++){
            while (k < n && arr[i] + arr[j] > arr[k]) {
                k++;
            }
            count += k - j - 1; 
        }
    }
    return count;
}
console.log("Số lượng hình tam giác có thể tạo ra từ mảng:", tamGiac(arr));
