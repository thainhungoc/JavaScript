function doDaiTu(inputString) {
    const words = inputString.split(' ');
    let tuDai = '';
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;

        if (length > maxLength) {
            tuDai = word;
            maxLength = length;
        }
    }
    return [tuDai, maxLength];
}
const str = "Viết một hàm nhận vào tham số là một chuỗi, tìm từ dài nhất trong chuỗi đó, nếu có từ 2 từ dài nhất có độ dài bằng nhau thì trả về từ đầu tiên dài nhất kèm theo độ dài của từ đó";
const [tuDai, length] = doDaiTu(str);
console.log(`Từ dài nhất là '${tuDai}' với độ dài ${length}.`);
