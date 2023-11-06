fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    for( let i = 0 ; i < 10 ; i++) {
      console.log("Parsed response: ", data[i]);
    }
  })
  .catch( (err) => console.log(err));