const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

/** This is how we create our first route
 * app.get('/route', callback )
 * /route: eg: localhost:5000/route
 * callback (request, response, response)
*/
app.get('/', (request, response, next) => {
  // console.log(request);
  response.send('<h1>Welcome Ironhacker. :)</h1><p>Today is Saturday</p>');
});

app.get('/course-all', (request, response, next) => {
  response.send('<h1>We are the Ironhack PT Web from Barcelona 🎉</h1>')
});

app.listen(3000, () => console.log('My first app listening on port 3000! http://localhost:3000 '));
