// script.js

function login(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
  
    // Benutzerdaten mit Weiterleitungs-URLs (Demo-Daten, nicht sicher!)
    const users = [
      { username: 'philip', password: 'pass123', redirectUrl: 'philip.html' },
      { username: 'lea', password: 'abc456', redirectUrl: 'lea.html' },
      { username: 'miriam', password: 'qwerty789', redirectUrl: 'miriam.html' }
    ];
  
    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);
  
    if (user) {
      window.location.href = user.redirectUrl;
    } else {
      alert('Ungültiger Benutzername oder Passwort. Bitte versuchen Sie es erneut.');
    }
  }

  function showChangePasswordForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.change-password-form').style.display = 'block';
  }
  
  function hideChangePasswordForm() {
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.change-password-form').style.display = 'none';
  }
  

  
  // Versteckt das Passwort-Ändern-Formular beim ersten Laden der Seite
  document.addEventListener('DOMContentLoaded', function() {
    hideChangePasswordForm();
  });
  