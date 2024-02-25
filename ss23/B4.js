var a= Number(prompt("nhập vào số nguyên dương a"))
var b= Number(prompt("nhập vào số nguyên dương b"))
for(var i=1 ; i<=a;i++){
    if(i % b== 0){
        console.log("số chia hết cho b", +i)
    }
}