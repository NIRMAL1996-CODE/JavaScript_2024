//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.//
// examples of built-in functions, like alert(message), prompt(message, default) and confirm(question).//
//To create a function we can use a function declaration.//
//print hello message//
function showMessage() {
    alert( 'Hello everyone!' );
  }
  showMessage() ;//call it//

  //to find sum of numbers//
function sum(a,b){
    return a+b;
}
alert(sum(3,4));

//print 1 to n numbers//
let n;
function print(n){
    for(let i=1; i<=n;i++)
    {
        console.log(i);
    }
}
print(8);