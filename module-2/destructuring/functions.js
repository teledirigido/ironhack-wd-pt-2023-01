const userData = { firstName: 'ana', lastName: 'martinez' };

function getFullName(user) {
  console.log(`${user.firstName} ${user.lastName}`);
  return `${user.firstName} ${user.lastName}`;
}

function getFullName2({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}


getFullName2(userData); // => ana martinez
