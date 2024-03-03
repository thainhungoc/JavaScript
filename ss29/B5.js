function timKiemChuoiTrongMang(arr, chuoi) {
    var ketQua = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes(chuoi)) {
            ketQua.push(arr[i]); 
        }
    }

    return ketQua; 
}

var mangChuoi = ["Hello world", "JavaScript", "good morning", "xin chao cac ban"];
var chuoiNhap = prompt("Nhập vào một chuỗi bất kỳ:");
var ketQuaTimKiem = timKiemChuoiTrongMang(mangChuoi, chuoiNhap);
if (ketQuaTimKiem.length > 0) {
    console.log("Các phần tử trong mảng chứa chuỗi '" + chuoiNhap + "':");
    console.log(ketQuaTimKiem.join("\n"));
} else {
    console.log("Không có phần tử nào trong mảng chứa chuỗi '" + chuoiNhap + "'.");
}
