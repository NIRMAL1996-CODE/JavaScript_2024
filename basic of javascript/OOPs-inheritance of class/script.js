//class inherits other class //
class book{
    constructor(books, author){
        this.books =books;
        this.author =author;
    }
    price(){
        console.log(`${this.books} price has dropped`);
    }
    soldout(){
        console.log(`${this.books} is soldout`)
    }
};
//use extends keyword to interit a class//
class author extends book{
    authors(){
        console.log(`the  author of the book ${this.books} is ${this.author}`);
    } 
};

let book1 =new book("THE SECRET", "Rhonda Byrne");
let book2 =new author("INDIAN POLITICS", "Ram");

book1.price();
book2.soldout();
book2.authors();