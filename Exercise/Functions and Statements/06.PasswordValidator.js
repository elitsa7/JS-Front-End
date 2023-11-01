function passwordValidator(password) {
  function isValidLength() {
    return password.length >= 6 && password.length <= 10;
  }
  function isOnlyLettersAndDigits() {
    return password.match("^[a-zA-Z0-9_.-]*$");
  }
  function hasAtLeastTwoDigits() {
    const digitRegex = /\d/g;
    const digitsCounter = password.match(digitRegex);
    return digitsCounter && digitsCounter.length >= 2;
  }
  const errors = [];
  if (!isValidLength(password)) {
    errors.push("Password must be between 6 and 10 characters");
  }
  if (!isOnlyLettersAndDigits(password)) {
    errors.push("Password must consist only of letters and digits");
  }
  if (!hasAtLeastTwoDigits(password)) {
    errors.push("Password must have at least 2 digits");
  }
  if (errors.length > 0) {
    console.log(errors.join("\n"));
    return;
  }
  console.log("Password is valid");
}
passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
