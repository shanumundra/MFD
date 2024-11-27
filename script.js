const applyFiltersButton = document.getElementById('apply-filters');

applyFiltersButton.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const filters = {};

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const group = checkbox.id.includes('size') ? 'size' : 'type';
      filters[group] = filters[group] || [];
      filters[group].push(checkbox.value);
    }
  });

  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    const type = product.getAttribute('data-type');
    const size = product.getAttribute('data-size');
    const matchesType = !filters.type || filters.type.includes(type);
    const matchesSize = !filters.size || filters.size.includes(size);

    product.style.display = matchesType && matchesSize ? 'block' : 'none';
  });
});
