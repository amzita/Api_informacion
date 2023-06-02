fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      console.log('ID:', post.id);
      console.log('UserID:', post.userId);
      console.log('Title:', post.title);
      console.log('Body:', post.body);
      console.log('--------------------------');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });



