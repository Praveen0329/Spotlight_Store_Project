const products = [
  { id: 1, name: "Men's T-Shirt", price: 799, image: "product1.jpg", category: "men" },
  { id: 2, name: "Women's Dress", price: 1299, image: "product2.jpg", category: "women" },
  { id: 3, name: "Men's Jeans", price: 1499, image: "product3.jpg", category: "men" },
  { id: 4, name: "Women's Top", price: 999, image: "product4.jpg", category: "women" },
  { id: 5, name: "Men's Jeans", price: 699, image: "product5.jpg", category: "men" },
  { id: 6, name: "Women's Top", price: 699, image: "product6.jpg", category: "women" },
  { id: 7, name: "Men's Shirt", price: 699, image: "product7.jpg", category: "men" }
];

let cart = [];
let currentCategory = "all";

const productGrid = document.getElementById("productGrid");
const cartList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

/* Mobile menu */
menu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* Show products */
function showProducts() {
  productGrid.innerHTML = "";

  const filteredProducts = products.filter(product => {
    return currentCategory === "all" || product.category === currentCategory;
  });

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button class="cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });
}

/* Filter products */
function filterProducts(category) {
  currentCategory = category;
  showProducts();
}

/* Add to cart */
function addToCart(id) {
  const item = products.find(product => product.id === id);

  if (item) {
    cart.push(item);
    updateCart();
  }
}

/* Update cart */
function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    cartTotal.textContent = 0;
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.className = "cart-item";

    li.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;

    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
}

/* Remove item */
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

/* Load products on page start */
showProducts();
updateCart();
