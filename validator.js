const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };
  
  const isValidName = (name) => {
    return name && name.length > 2;
  };
  
  module.exports = { isValidEmail, isValidName };
  