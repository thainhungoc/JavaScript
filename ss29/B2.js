const array = ["apple", "hello", "love", "family", "friend"];
function timKiem(arr){
    let phanTuDai ='';
    let doDaiPhanTu = 0;
    for(let i=0; i< arr.length; i++){
        const phanTu=arr[i];
        if(phanTu.length > doDaiPhanTu){
            doDaiPhanTu = phanTu.length;
            phanTuDai = phanTu;
        }
    }
    return phanTuDai;
}
const result = timKiem(array);
console.log(`Phần tử có độ dài lớn nhất trong mảng là: ${result}`);
