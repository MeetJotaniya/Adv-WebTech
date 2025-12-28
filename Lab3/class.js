class MyClass{
    constructor(fName, lName){
        this.fName = fName,
        this.lName = lName
    }

    displayName(){
        console.log(this.fName + " " + this.lName);
    }
}

let obj = new MyClass("Arjun", "Bala");
obj.displayName();