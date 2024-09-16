// Object Oriented Programming in js(creating methods using class)//
class form{
    submit(){
        alert(this.name + ": your form is submitted");
    }
    cancel(){
        alert(this.name + ": your form is cancelled");
    }
    fillname(givenname){
        this.name =givenname;
    }
}
//create a form//
let a= new form();
//fill the form with A's details//
a.fillname("A ");
a.submit();
a.cancel();