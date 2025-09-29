// Products List
const products = [
  { id: 1, name: "Men's T-Shirt", price: 799, image: "product1.jpg", category: "men" },
  { id: 2, name: "Women's Dress", price: 1299, image: "product2.jpg", category: "women" },
  { id: 3, name: "Men's Jeans", price: 1499, image: "product3.jpg", category: "men" },
  { id: 4, name: "Women's Top", price: 999, image: "product4.jpg", category: "women" },
  { id: 5, name: "Men's jeans", price: 699, image: "product5.jpg", category: "men" },
  { id: 6, name: "Women's Top", price: 699, image: "product6.jpg", category: "women" },
  { id: 7, name: "Men's Shirt", price: 699, image: "product7.jpg", category: "men" },
];

let cart = [];
let currentCategory = "all";

const productGrid = document.getElementById("productGrid");
const cartList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function showProducts() {
  productGrid.innerHTML = "";

  products.forEach(product => {
    if (currentCategory === "all" || product.category === currentCategory) {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;

      productGrid.appendChild(card);
    }
  });
}
function filterProducts(category) {
  currentCategory = category;
  showProducts();
}
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}
function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">Remove</button>`;

    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
showProducts();
