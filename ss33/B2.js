    function Contact(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    
    const contacts = [
        new Contact("Như Ngọc", "0383509171", "thainhungoc205@gmail.com"),
        new Contact("Bảo Trân", "0523657457", "lhbtran2003@gmail.com")
    ];
    
    for (const contact of contacts) {
        console.log("Name:", contact.name);
        console.log("Phone:", contact.phone);
        console.log("Email:", contact.email);
        console.log("----------------------");
    }
    




    
    