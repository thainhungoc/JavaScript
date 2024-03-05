function list(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
};
const sanPham =[
    {id:1, name:"Iphone 12", price: 20000},
    {id:2, name:"Iphone 11", price: 10000},
    {id:3, name:"Samsung", price: 50000},

];
sanPham.sort((a, b)=> a.price - b.price);
console.log("Danh sách sau khi được sắp xếp tăng dần theo giá: ");
sanPham.forEach(list => {
    console.log(`ID: ${list.id}, Tên sản phẩm: ${list.name}, Giá: ${list.price}`);
});