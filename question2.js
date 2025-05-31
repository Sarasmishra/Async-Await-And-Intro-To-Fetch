//  using fetch function so it will get data from url
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  // Parse JSON response
  .then(users => {
    users.forEach(user => {
      console.log(user.name);  // Log each user's name
    });
  })
  .catch(error => {
    //  for errors
    console.error('Error fetching users:', error);
  });
