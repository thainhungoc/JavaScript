/*obj create

// const animal = {
//     type: "unlnown",
//     sound: "some sound",
//     makeSound: function(){
//         console.log(this.sound);
//     },
// };
// const dog= Object.create(animal);
// dog.type = "dog";
// dog.sound = "bark";
// dog.makeSound();


/* Getter và setter*/

const person = {
    firtsName: "hung",
    lastName: "nguyen",
    set fullName(name){
        const parts = name.split(" ");    // có dâu cách thì lấy hết còn không có dấu cách thì chỉ lấy được ký tự
        this.firtsName = parts[0];
        this.lastName = parts[1];
    },
};
person.fullName = "nhu ngoc";
console.log(person.firtsName);
console.log(person.lastName);