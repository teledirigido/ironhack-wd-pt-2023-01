axios({
  method: 'GET',
  url: `http://localhost:3000/books/656e1b554a9e89a13bbe0c59`,
})
  .then( (response) => {
    console.log(response.data);
})