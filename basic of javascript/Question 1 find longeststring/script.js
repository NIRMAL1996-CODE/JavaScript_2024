//find longest srting//

function findlongestword(str){
    let words= str.split(" ");
    let longestWord= "";

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord=word;
        }
    }
return console.log(longestWord);
}
findlongestword("my name is NIRMAL");