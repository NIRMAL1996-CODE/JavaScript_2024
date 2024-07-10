//declarations of object//
//An empty object can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user1 = {};  // "object literal" syntax

//properties into {...} as “key: value” pairs:
let user3 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  // get property values of the object:
alert( user3.name ); // John
alert( user3.age ); // 30

//The value can be of any type. Let’s add a boolean one:
user3.isAdmin = true;

//To remove a property, we can use the delete operator:
delete user3.age;

//We can also use multiword property names, but then they must be quoted//

let user4 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted//
  };

  //The last property in the list may end with a comma//

let user5 = {
    name: "John",
    age: 30,
  }
 // That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.//

 //nested object//
 let student={school: "LFS",
  age:20,
  eligibility:10,
 
  //create a function to enroll in this course //
 enroll()
 {
  console.log("you are successfully enrolled");
 }

 };
 // call function enroll//
 student.enroll();