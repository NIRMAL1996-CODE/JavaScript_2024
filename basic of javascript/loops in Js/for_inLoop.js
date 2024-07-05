/* for...in loop that iterates over each property of the obj object, printing the key and its associated value.
syntax :-
  for (let key in object) console.log(key);
       Explanation:
                object is the object you want to iterate over.

                key is each key in the object.

                console.log(key) logs each key to the console.
*/
//write a program using for-in loop//

let student={
    name: "NIRMAL",
    age:20,
    cgpa:9.9,
    isPass: true,
};

for (let key in student) 
    console.log("key",key,"value",student[key]);