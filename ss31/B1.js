function doDaiTu(inputString) {
    // Tách chuỗi thành các từ
    const words = inputString.split(' ');
    // Khởi tạo biến để lưu từ dài nhất và độ dài của nó
    let tuDai = '';
    let maxLength = 0;

    // Duyệt qua từng từ
    for (const word of words) {
        // Tính độ dài của từ hiện tại
        const length = word.length;

        // Cập nhật từ dài nhất và độ dài của nó nếu cần
        if (length > maxLength) {
            tuDai = word;
            maxLength = length;
        }
    }
    // Trả về từ dài nhất và độ dài của nó
    return [tuDai, maxLength];
}
// Ví dụ sử dụng hàm
const str = "Viết một hàm nhận vào tham số là một chuỗi, tìm từ dài nhất trong chuỗi đó, nếu có từ 2 từ dài nhất có độ dài bằng nhau thì trả về từ đầu tiên dài nhất kèm theo độ dài của từ đó";
const [tuDai, length] = doDaiTu(str);
console.log(`Từ dài nhất là '${tuDai}' với độ dài ${length}.`);
