const notifyButton = document.getElementById("button-id")
const errorText = document.getElementById("error-email")
const emailInput = document.getElementById("email");


notifyButton.addEventListener("mouseover", () => {
notifyButton.style.background = "hsl(223, 54%, 52%)"
emailInput.style.placeholderColor = "red"
if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
  errorText.style.opacity = "1";
  emailInput.style.border = " 2px solid red"
} else {
  document.getElementById("error-email").style.opacity = "0";
}
})

notifyButton.addEventListener("mouseout", () => {
notifyButton.style.background = "hsl(223, 87%, 63%)"
})

notifyButton.addEventListener("mouseout", () => {
  errorText.style.opacity = " 0";
  })

  notifyButton.addEventListener("mouseout", () => {
    emailInput.style.border = " 2px solid hsl(223, 100%, 88%)"
    })

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }