
const nav = document.getElementById('navbar');


  const toggleButton = document.getElementById('toggleProducts');
  const productItems = document.querySelectorAll('.product-item');
  const defaultVisibleCount = 6;

  function updateVisibility() {
    productItems.forEach((item, index) => {
      if (index < defaultVisibleCount) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  updateVisibility();

  toggleButton.addEventListener('click', () => {
    const isCollapsed = productItems[defaultVisibleCount].classList.contains('hidden');

    productItems.forEach((item, index) => {
      if (index >= defaultVisibleCount) {
        item.classList.toggle('hidden');
      }
    });

    toggleButton.textContent = isCollapsed ? 'View Less' : 'View More';
  });

