document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    document.getElementById("result").innerHTML =
      "Fill in all the boxes!";
  }
  else{
    document.getElementById("result").innerHTML =
      "Thank you " + name + "! Your message has been sent.";

    this.reset();
  }

});
