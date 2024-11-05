const { isValidEmail, isValidName } = require('./validator.js');
const logger = require('./logger.js');

let users = [];

const createUser = (name, email) => {
  if (!isValidName(name)) {
    logger.error('Invalid name');
    return { error: 'Invalid name' };
  }
  
  if (!isValidEmail(email)) {
    logger.error('Invalid email');
    return { error: 'Invalid email' };
  }

  const newUser = { name, email };
  users.push(newUser);
  logger.info(`User Created Sucessfully: ${name}`);
  
  return newUser;
};

module.exports = { createUser };
