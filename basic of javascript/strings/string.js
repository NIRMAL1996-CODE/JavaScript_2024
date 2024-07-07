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

//