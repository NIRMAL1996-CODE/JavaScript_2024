// create a object named marks and print the keys and value//
let marks ={
    student1: 90,
    student2: 80,
    student3: 70,
    student4: 60,
    student5: 50
}
//Object.keys -> helps to create array of keys of object -----in which Object "O" should be capital and keys all should be lowercase//
// Object.keys(obj)---> returns an array of the object's keys.

// for(let i=0; i<Object.keys(marks).length; i++)
// {
//     console.log("marks of students= "+ marks[Object.keys(marks)[i]]);
// }

//write same using for-in loop//

//its takes very less statments
for(let key in marks)
    {
        console.log("marks of students " + key + " are " + marks[key]);
    }