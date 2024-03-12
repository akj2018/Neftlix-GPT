const fullnameValidate = (fullname) => {
  const re = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i;

  if (
    fullname === undefined ||
    fullname === null ||
    fullname.length < 3 ||
    !re.test(fullname)
  ) {
    return "Please enter a valid fullname.";
  }

  return null;
};

export default fullnameValidate;
