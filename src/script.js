document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your message! We will get back to you soon.";
    thankYouMessage.style.color = "#d63384";
    thankYouMessage.style.fontSize = "1.2em";
    thankYouMessage.style.marginTop = "20px";
    thankYouMessage.style.fontWeight = "bold";
    thankYouMessage.style.display = "none";
  
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const name = contactForm.querySelector("#name").value;
        const email = contactForm.querySelector("#email").value;
        const subject = contactForm.querySelector("#subject").value;
        const message = contactForm.querySelector("#message").value;
  
        if (!name || !email || !subject || !message) {
          alert("Please fill out all fields.");
          return;
        }
  
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        contactForm.appendChild(thankYouMessage);
        thankYouMessage.style.display = "block";
        contactForm.reset();
      });
    }
  
    const footerYear = document.querySelector(".footer-year");
    if (footerYear) {
      const currentYear = new Date().getFullYear();
      footerYear.textContent = currentYear;
    }
  });
   