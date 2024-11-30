const categories = {
  Sale: ["Rajasthani", "Punjabi", "Western", "Bridal"],
  Rent: ["Boys", "Girls", "School", "Wedding"]
};

const products = [
  { name: "Bridal Lehenga", category: "Sale", price: 2500 },
  { name: "Western Dress", category: "Rent", price: 1000 }
];

function loadCategories(type) {
  const container = document.getElementById("category-container");
  container.innerHTML = categories[type]
    .map(cat => `<button class="category-btn">${cat}</button>`)
    .join("");
}
