// bcryptDemo/timeTest.js

const bcrypt = require('bcryptjs');
const plainPassword1 = 'HelloWorld';

for (let saltRounds = 10; saltRounds < 19; saltRounds++) {
  console.time(`bcrypt | cost: ${saltRounds}, time to hash`);
  bcrypt.hashSync(plainPassword1, saltRounds);
  console.timeEnd(`bcrypt | cost: ${saltRounds}, time to hash`);
}
