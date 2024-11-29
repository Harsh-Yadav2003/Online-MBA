const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    content.classList.toggle('active');
  });
});

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function () {
    const collapseElement = this.nextElementSibling; // Find the collapse element
    if (collapseElement.classList.contains('collapse')) {
      collapseElement.classList.remove('collapse'); // Remove the 'collapse' class to show
    } else {
      collapseElement.classList.add('collapse'); // Add 'collapse' class to hide
    }
  });
});
