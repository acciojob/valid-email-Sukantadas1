function validEmail(str) {
  // Regular expression for validating email addresses
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the input email against the regex
  return emailRegex.test(email);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
