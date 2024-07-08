//object is kind of like map/ dictionary where we have key and value as pairs//
let x= {name: "nirmal",
    age: 25,
    percentage:90,
    isMarried: false
};
console.log(x);

//if want print only one element//
console.log(x.name);//output: nirmal

//if want to modify values in object//
x.age=28;
console.log(x.age);

//iterate :- all key and values and print//
// forin loop//
//synatx: for(const key in object)//
for (const key in x) {
    console.log(key,x[key]);
}