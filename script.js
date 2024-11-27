// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function () {
  const query = searchBar.value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const type = product.getAttribute('data-type').toLowerCase();
    if (type.includes(query)) {
      product.style.display = 'inline-block';
    } else {
      product.style.display = 'none';
    }
  });
});

// Filter by size
const sizeFilter = document.getElementById('size-filter');
sizeFilter.addEventListener('change', function () {
  const selectedSize = sizeFilter.value;
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const size = product.getAttribute('data-size');
    if (selectedSize === '' || size === selectedSize) {
      product.style.display = 'inline-block';
    } else {
      product.style.display = 'none';
    }
  });
});
