let str=" nirmal jaiswal";
let count=0;
for(let i=0; i<=str.length; i++)
{
    if(str[i]==='a'|| str[i]==='e'|| str[i]==='i'|| str[i]==='o'|| str[i]==='u'||str[i]==='A'|| str[i]==='E'|| str[i]===' I' || str[i]==='O'|| str[i]==='U')
    {
        count++;
    }
    else
     {
        console.log("NOT A VOWEL");
     }
    
}
console.log("The number of vowels are "+count);