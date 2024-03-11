function product(id, name, price, quantily){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantily = quantily;
}
const products =[
   new product("123", "iphone", "200", "3"),
   new product("456", "samsung", "300", "4"),
   new product("789", "oppo", "400", "5"),
]
for(product of products){
    console.log("ID:", product.id);
    console.log("Name:", product.name);
    console.log("price:", product.price);
    console.log("Quantily:", product.quantily);
    console.log("----------------------");
}