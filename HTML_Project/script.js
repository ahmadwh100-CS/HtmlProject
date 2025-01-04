function validateForm() {
    name = document.getElementById("name").value;
   email = document.getElementById("email").value;
   message = document.getElementById("message").value;

  nameError = document.getElementById("nameError");
  emailError = document.getElementById("emailError");
  messageError = document.getElementById("messageError");
  formMessage = document.getElementById("formMessage");

  
	isValid=true;

    if (name == "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

   emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email == "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

    if (message == "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

    if (isValid) {
    formMessage.textContent = "Form submitted successfully!";
    // Clear form inputs
    document.getElementById("contactForm").reset();
  }
}
