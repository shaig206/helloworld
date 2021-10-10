class Lead {

    constructor(name,age){
        this.name = name; 
        this.age = age;
    }
    hey(){console.log("hey " + this.name + " " +this.age)}
    
}
    let test = new Lead ("shai",32);

    test.hey(); 

