$(document).ready(function() {
  // Getting references to our form and inputs
  var signinForm = $("form.signin");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  signinForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }


    // If we have an email and password we run the signinUser function and clear the form
    signinUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });
    
  $("#signinFormButton").click(()=>{
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }


    // If we have an email and password we run the signinUser function and clear the form
    signinUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");  
  })
      
    
  // signinUser does a post to our "api/signin" route and if successful, redirects us the the members page
  function signinUser(email, password) {
    $.post("/api/signin", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});
