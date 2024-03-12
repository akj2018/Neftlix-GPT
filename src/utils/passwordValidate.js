const passwordValidate = (password) => {
  // Check length
  const minLength = 4;
  const maxLength = 10;
  if (
    password === undefined ||
    password === null ||
    password.length < minLength ||
    password.length > maxLength
  ) {
    return (
      "Your password must contain between " +
      minLength +
      " and " +
      maxLength +
      " characters."
    );
  }

  // Check whitespace
  const hasWhitespace = /\s/;
  if (hasWhitespace.test(password)) {
    return "Your password must not contain Whitespaces.";
  }

  // Check for at least one digit and one letter
  const requiredChars = /^(?=.+\d)(?=.+[A-Za-z])$/;
  if (!requiredChars.test(password)) {
    return "Password must contain atleat one digit and one letter.";
  }

  return null;
};

export default passwordValidate;
