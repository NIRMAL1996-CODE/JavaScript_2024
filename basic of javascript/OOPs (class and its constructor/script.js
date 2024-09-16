//create a constructor in class//
class yourform{
    constructor(givename ,formnumber){
     this.name =givename ;
     this.number = formnumber ;
     
    }
    preview(){
        alert(`${this.name} " your form number is : "${ this.number}`);
    }

    submit(){
        alert(`${this.name} " your form is submitted : "${ this.number}`);
    }
    cancel(){
        alert(`${this.name} " your form is cancelled : "${ this.number}`);
        this.formnumber=0;
    }
}

let nirmal = new yourform("Nirmal", 123456);
nirmal.preview();
nirmal.submit();
nirmal.cancel();
