const bcrypt = require("bcrypt");

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = hashPassword;
