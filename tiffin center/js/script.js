

// Sticky Navbar
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Product Preview
let previewContainer = document.querySelector('.products-preview');
let previewBoxes = document.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxes.forEach(preview => {
      let target = preview.getAttribute('active');
      if (name === target) {
        preview.classList.add('target');
      }
    });
  };
});

previewBoxes.forEach(close => {
  close.querySelector('.fa-close').onclick = () => {
    close.classList.remove('target');
    previewContainer.style.display = 'none';
  };
});


const Uname = document.querySelector('.Uname');
const storedUsername = localStorage.getItem('username');
Uname.innerHTML = storedUsername ? storedUsername : 'User';