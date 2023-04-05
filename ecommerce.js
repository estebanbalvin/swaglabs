const productList = [
  {
    name: "Product 1",
    price: 10.99,
    image: "product1.jpg",
  },
  {
    name: "Product 2",
    price: 14.99,
    image: "product2.jpg",
  },
  {
    name: "Product 3",
    price: 19.99,
    image: "product3.jpg",
  },
];

const productContainer = document.querySelector("#product-list");

productList.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productDiv.appendChild(productImage);

  const productName = document.createElement("h3");
  productName.textContent = product.name;
  productDiv.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.textContent = `$${product.price}`;
  productDiv.appendChild(productPrice);

  const addButton = document.createElement("button");
  addButton.textContent = "Add to Cart";
  addButton.addEventListener("click", () => {
    // Add product to cart
  });
  productDiv.appendChild(addButton);

  productContainer.appendChild(productDiv);
});
