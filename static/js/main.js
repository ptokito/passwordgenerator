// Generate a random background color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change the background color of the page on load and on button click
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomColor();

  const button = document.querySelector('button[type="submit"]');
  button.addEventListener('click', function() {
    body.style.backgroundColor = getRandomColor();
  });
});

// Show/hide the password when the eye icon is clicked
const password = document.querySelector('.password');
const eyeIcon = document.querySelector('.eye-icon');

eyeIcon.addEventListener('click', function() {
  if (password.type === 'password') {
    password.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    password.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
});

