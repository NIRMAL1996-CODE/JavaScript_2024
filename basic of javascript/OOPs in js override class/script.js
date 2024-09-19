/*
The super keyword in JavaScript's object-oriented programming (OOP)
Inheritance allows a subclass to access properties and methods of a parent class,
 while super explicitly calls the parent's constructor or methods, ensuring proper initialization or extending behavior.
 */

class employee{
   login(){
    console.log(`Employee has logged in`);
    }

    logout(){
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employees has requested ${leaves} leaves- AUTO APPROVED`);
    }
};

class programmer extends employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
    requestLeaves(leaves){
    super.requestLeaves(4)
        console.log(`one extra is granted`);
    }
}

let e = new programmer();
e.login();
e.requestLeaves(3);