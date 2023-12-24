class Employee{
    constructor(name){
        this.name=name
        this.age='23'
        this.address="Malad"
    }
}

let employee= new Employee("ram");
let employee2= new Employee("Laksaman");
console.log(employee.address);//Employee { name: 'Jone' }
console.log(employee2);//Employee { name: 'Jone' }


// how to call constructor of parent class
You can use the super keyword to call the constructor of a parent class. 
Remember that super() must be called before using 'this' reference.
 Otherwise it will cause a reference error. Let's the usage of it,
class Square extends Rectangle {
    constructor(length) {
      super(length, length);
      this.name = "Square";
    }
  
    get area() {
      return this.width * this.height;
    }
  
    set area(value) {
      this.area = value;
    }
  }