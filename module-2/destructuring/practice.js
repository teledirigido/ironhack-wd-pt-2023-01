const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
    street: {
      postalCode: 123
    }
  },
};

let { 
  name: { firstName, lastName },
  favoriteFootballTeam,
  hometown: { 
    city
  }
} = data;

/**
 * student first and last name, favorite 
 * football club, as well as the city 
 * and the country this student is coming from. */
console.log(`${firstName.toUpperCase()} ${lastName}: \n${favoriteFootballTeam}. From ${city}`);
