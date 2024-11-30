// Mock Product Data
const products = [
  { category: 'Rajasthani', size: 'M', color: 'Red', price: 1200 },
  { category: 'Rajasthani', size: 'S', color: 'Blue', price: 1500 },
  { category: 'Gujrati', size: 'L', color: 'Green', price: 1800 },
  { category: 'Punjabi', size: 'M', color: 'Yellow', price: 1000 },
  { category: 'Wedding', size: 'L', color: 'Pink', price: 2500 },
];

// DOM References
const categorySections = document.querySelectorAll('.category-section ul li');
const productsGrid = document.querySelector('.product-grid');
const filtersSection = document.createElement('div');
filtersSection.id = 'filters';
filtersSection.innerHTML = `
  <h3>Filters</h3>
  <div>
    <label for="size-filter">Size:</label>
    <select id="size-filter">
      <option value="">All</option>
      <option value="S">Small</option>
      <option value="M">Medium</option>
      <option value="L">Large</option>
    </select>
  </div>
  <div>
    <label for="color-filter">Color:</label>
    <select id="color-filter">
      <option value="">All</option>
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      <option value="Yellow">Yellow</option>
      <option value="Pink">Pink</option>
    </select>
  </div>
  <div>
    <label for="price-filter">Price:</label>
    <select id="price-filter">
      <option value="">All</option>
      <option value="1000-1500">1000-1500</option>
      <option value="1500-2000">1500-2000</option>
      <option value="2000-3000">2000-3000</option>
    </select>
  </div>
  <button id="apply-filters">Apply Filters</button>
`;
document.body.insertBefore(filtersSection, productsGrid);
filtersSection.style.display = 'none';

// Display Products Function
function displayProducts(filteredProducts) {
  productsGrid.innerHTML = '';
  filteredProducts.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    productCard.innerHTML = `
      <h3>${product.category} Dress</h3>
      <p>Size: ${product.size}</p>
      <p>Color: ${product.color}</p>
      <p>Price: ₹${product.price}</p>
    `;
    productsGrid.appendChild(productCard);
  });
}

// Filter Logic
function applyFilters(category) {
  const sizeFilter = document.getElementById('size-filter').value;
  const colorFilter = document.getElementById('color-filter').value;
  const priceFilter = document.getElementById('price-filter').value;

  let filteredProducts = products.filter((product) => product.category === category);

  if (sizeFilter) {
    filteredProducts = filteredProducts.filter((product) => product.size === sizeFilter);
  }
  if (colorFilter) {
    filteredProducts = filteredProducts.filter((product) => product.color === colorFilter);
  }
  if (priceFilter) {
    const [min, max] = priceFilter.split('-').map(Number);
    filteredProducts = filteredProducts.filter((product) => product.price >= min && product.price <= max);
  }

  displayProducts(filteredProducts);
}

// Event Listeners for Category Selection
categorySections.forEach((section) => {
  section.addEventListener('click', (event) => {
    const selectedCategory = event.target.textContent;
    filtersSection.style.display = 'block';
    displayProducts(products.filter((product) => product.category === selectedCategory));
    document.getElementById('apply-filters').onclick = () => applyFilters(selectedCategory);
  });
});
