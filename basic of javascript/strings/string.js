//In JS, the textual data is stored as strings.There is no separate type for single character.Strings can be enclosed within either single quotes, double quotes or backticks//
let single='single-quoted';
let double="double-quoted";

let backticks=`backticks`;

//single and double are same only.Backticks, however, allow us to embed any expression into the string, by wrapping it in ${...}//
function sum(a,b){
return a+b;}

console.log(`1+2=${sum(1,2)}`);
alert(`1+2=${sum(1,2)}`);

//baclticks also allow to span multiple lines not possible with quotes//
let guestlist=`guests:
*john
*jack
rose
;`
alert(guestlist);

//change case of string//
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

//if we want a single character lowercased:
alert( 'Interface'[0].toLowerCase() ); // 'i'

// the characters with codes 65..220 (the latin alphabet and a little bit extra) by making a string of them//
//String.fromCodePoint(code) Creates a character by its numeric code//
let str = '';

for (let i = 65; i <= 131; i++) {
  str += String.fromCodePoint(i);
}
console.log( str );

//task//
//1.Write a function ucFirst(str) that returns the string str with the uppercased first character//
let str1="nirmal";
console.log('n'.toUpperCase());

//2.Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.//
//later//