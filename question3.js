async function fetchAndDisplayProducts() {
  try {
    // Fetch product data from Url
    const response = await fetch('https://fakestoreapi.com/products');

    // Checking if response is successful (status 200-299)
    if (!response.ok) throw new Error('Network response was not ok');

    // Parse JSON data from the response
    const products = await response.json();

    // using forEach to display all data 
    products.forEach(product => {
      console.log(`Title: ${product.title}`);       //  product title
      console.log(`Price: $${product.price}`);      //  product price
      console.log(`Image URL: ${product.image}`);   //  product image URL
      console.log('View Details Button');            // sample view details button
      console.log('---------------------------');  // to separte the products and increase readabiltiy
    });

    // Use reduce function to calculate the total price of all products
    const totalPrice = products.reduce((accumulator, product) => {
      return accumulator + product.price;           
    }, 0);                                          

    // Log the total price 
    console.log(`Total Price of All Products: $${totalPrice}`);

  } catch (error) {
    // Handle errors such as network issues or invalid JSON
    console.error("Failed to fetch products. Please try again later");
  }
}

// Call the async function to fetch and display products
fetchAndDisplayProducts();
