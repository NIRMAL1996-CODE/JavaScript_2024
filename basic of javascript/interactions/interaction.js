//interaction in js are alert, prompt and confirm.//
//1.alert :- It shows a message and waits for the user to press “OK”.//
alert("hello");

//2. prompt :- It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.//
//syntax-result = prompt(title, [default]);//
           
           result = prompt("ENTER NUMBER 1TO 10", [10]);
           if(result>10)
           {
            alert("INVALID NUMBER");
           }
           else{
            alert("VALID INPUT");
           }
//3. CONFIRM :- The function confirm shows a modal window with a question and two buttons: OK and Cancel.//
///syntax:-   result = confirm(question);//

    result = confirm("are you okay?");
    alert("yes");

