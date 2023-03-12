function contactForm(){
  var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");


    // intregation part 
 // have value in one object









var text;
if(username.lenght <5){
  text= "please enter a valid name";
  error_message.innerHTML = text;
  return false;
}

if(isNaN(phone) || phone.lenght != 10){
  text= "please enter a valid phone number";
  error_message.innerHTML = text;
  return false;
}
if(email.indexOf("@") == -1 || email.lenght < 6){
  text= "please enter a valid email";
  error_message.innerHTML = text;
  return false;
}
if(username.lenght <5){
  text= "please enter a valid name";
  error_message.innerHTML = text;
  return false;
}
if(message.lenght <=10){
  text= "please enter more discription";
  error_message.innerHTML = text;
  return false;
}
alert("form submitted successfully!!!");
return true;

}

    