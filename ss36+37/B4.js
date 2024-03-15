const input1 = document.getElementById("ip1");
const input2 = document.getElementById("ip2");
const kq = document.getElementById("result");
input1.addEventListener("keyup", calculateSum);
input2.addEventListener("keyup", calculateSum);
function calculateSum(){
    const ip1 = parseFloat(input1.value);
    const ip2 = parseFloat(input2.value);
    const sum = ip1 + ip2;
    kq.value = sum;
}