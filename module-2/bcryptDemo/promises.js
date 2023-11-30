
const bcrypt = require("bcryptjs");
const saltRounds = 12;

const plainPassword1 = "HelloWorld";

bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log(`Salt: ${salt}`);

    return bcrypt.hash(plainPassword1, salt);
  })
  .then(hash => console.log(`Hash: ${hash}`))
  .catch(err => console.error(err.message));