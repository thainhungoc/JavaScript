function findMinMax(arr) {
    if (arr.length === 0) {
        console.log("Mảng rỗng.");
        return;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(`Phần tử nhỏ nhất: ${min}`);
    console.log(`Phần tử lớn nhất: ${max}`);
}

const Array = [10, 5, 8, 3, 12, 7];
findMinMax(Array);
