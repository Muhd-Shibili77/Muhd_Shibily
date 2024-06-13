function validation(){
    var Name = document.getElementById("Name");
    var Email = document.getElementById("Email");
    var Subject = document.getElementById("Subject"); 
    var Message = document.getElementById("Message");

    if(Name.value==""){
        alert("must enter your name");
        document.form1.Name.focus();
        return false;
    }
    if(Email.value==""){
        alert("must enter your Email ID");
        document.form1.Email.focus();
        return false;
    }
    if(Subject.value==""){
        alert(" enter your Subject");
        document.form1.Subject.focus();
        return false;
    }
    if(Message.value==""){
        alert(" enter your Message");
        document.form1.Message.focus();
        return false;
    }
}