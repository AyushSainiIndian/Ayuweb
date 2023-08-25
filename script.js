document.addEventListener('DOMContentLoaded', function() {
  // Login Popup
  const loginBtn = document.getElementById('loginBtn');
  const loginPopup = document.getElementById('loginPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  loginBtn.addEventListener('click', function() {
    loginPopup.style.display = 'flex';
  });

  closePopupBtn.addEventListener('click', function() {
    loginPopup.style.display = 'none';
  });

  // Signup Popup
  const signupBtn = document.querySelector('.signup-btn');
  const signupPopup = document.getElementById('signupPopup');
  const closeSignupPopupBtn = document.getElementById('closeSignupPopupBtn');

  signupBtn.addEventListener('click', function() {
    signupPopup.style.display = 'flex';
  });

  closeSignupPopupBtn.addEventListener('click', function() {
    signupPopup.style.display = 'none';
  });

  const isLoggedIn = false; // Replace with actual login status check

  // Update button visibility based on login status
  const loginBtnElement = document.getElementById('loginBtn');
  const signupBtnElement = document.querySelector('.signup-btn');

  if (isLoggedIn) {
    loginBtnElement.style.display = 'none';
    signupBtnElement.style.display = 'none';
  } else {
    loginBtnElement.style.display = 'block';
    signupBtnElement.style.display = 'block';
  }
});
