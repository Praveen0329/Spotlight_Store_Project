const products = [
  { id: 1, name: "Men's T-Shirt", price: "₹799", image: "product1.jpg" },
  { id: 2, name: "Women's Dress", price: "₹1299", image: "product2.jpg" },
  { id: 3, name: "Men's Jeans", price: "₹1499", image: "product3.jpg" },
  { id: 4, name: "Women's Top", price: "₹999", image: "product4.jpg" },
  { id: 5, name: "Men's Jeans", price: "₹1499", image: "product5.jpg" },
  { id: 6, name: "Women's Top", price: "₹999", image: "product6.jpg" },
  { id: 7, name: "Men's Shirt", price: "₹999", image: "product7.jpg" }
];
var grid = document.getElementById("productGrid");

for (var i = 0; i < products.length; i++) {
  var p = products[i];
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.src = p.image;
  img.alt = p.name;
  card.appendChild(img);

  var h3 = document.createElement("h3");
  var h3Text = document.createTextNode(p.name);
  h3.appendChild(h3Text);
  card.appendChild(h3);

  var pTag = document.createElement("p");
  var pText = document.createTextNode(p.price);
  pTag.appendChild(pText);
  card.appendChild(pTag);

  var button = document.createElement("button");
  var buttonText = document.createTextNode("Add to Cart");
  button.appendChild(buttonText);
  card.appendChild(button);

  grid.appendChild(card);
}
