function person(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
}
const persons = [
    new person("Nhu Ngoc", "18", "TPHCM"),
    new person("Bao Tran", "18", "TPHCM"),
]
for(person of persons){
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Address:", person.address);
    console.log("----------------------");
}

