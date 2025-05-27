
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");
  
    if (!name || !email || !message) {
      formMsg.textContent = "Please fill in all fields.";
      formMsg.style.color = "red";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMsg.textContent = "Enter a valid email address.";
      formMsg.style.color = "red";
      return;
    }
  
    formMsg.textContent = "Form submitted successfully!";
    formMsg.style.color = "green";
    this.reset();
  });
  