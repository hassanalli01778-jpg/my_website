document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    document.getElementById("result").innerHTML =
      "সব ঘর পূরণ করুন!";
  }
  else{
    document.getElementById("result").innerHTML =
      "ধন্যবাদ " + name + "! আপনার বার্তা পাঠানো হয়েছে।";

    this.reset();
  }

});