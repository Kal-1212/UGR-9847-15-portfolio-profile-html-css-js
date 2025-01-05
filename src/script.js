emailjs.init("BlHheJoPbnAiL37IB");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendMail();
  });

function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_983o03k";
  const templateID = "template_cmrfu9a";

  console.log("Sending mail with params:", params);

  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error("FAILED...", error);
    });
}
