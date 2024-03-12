const emailValidate = (email) => {
  if (email === undefined || email === null) {
    return "Please enter a valid email.";
  }

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(email)) {
    return "Please enter a valid email.";
  }

  return null;
};

export default emailValidate;
