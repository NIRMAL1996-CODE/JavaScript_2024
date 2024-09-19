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

class author extends book{
    authors(){
        console.log(`the  author of this ${this.books} is ${this.author}`);
    } 
};

let book1 =new book("THE SECRET", "Rhonda Byrne");
let book2 =new author("INDIAN POLITICS", "random");

book1.price();
book2.soldout();
book2.authors("THE SECRET", "Rhonda Byrne");