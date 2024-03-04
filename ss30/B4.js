// const arr = [1,2,3,4,5,6,7];
// function soNguyenTo(arr){
//     var flag=true;
//     for(let i=0; i<=arr.length; i++){
//         if(arr[i]< 2){
//             flag = false;
//         }else if(arr[i] == 2){
//             flag = true;
//         }else if(arr[i] %2 == 0){
//             flag =  false;
//         }else{
//             for(let i=3; i<= arr-1; i+=2){
//                 if(arr % i ==0){
//                     flag = false;
//                     break;
//                 }
//             }

//         }
//         if (flag == true) {
//             console.log(arr[i] + " là số nguyên tố");
//         } else {
//             console.log(arr[i] + " không phải là số nguyên tố");
//         }
//     }
// }
function soNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function hienThi(mang) {
    console.log("Các số nguyên tố trong mảng:");
    for (let so of mang) {
        if (soNguyenTo(so)) {
            console.log(so);
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
hienThi(arr);
