
import {
  auth,
  signInWithEmailAndPassword,
  // sendPasswordResetEmail
} from './firebaseconfig.js'

// Make sure to select the elements by their correct IDs
var email = document.getElementById('exampleInputEmail1');
var password = document.getElementById('exampleInputPassword1');
var loginForm = document.querySelector('form'); // Select the form element

// Use the 'submit' event on the form, not 'click' on the button
loginForm.addEventListener('submit', handleLogin);

function handleLogin(e) {
  e.preventDefault();

  // Use the correct function to sign in with email and password
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
          // Access the user from the userCredential object
          const user = userCredential.user;

          console.log("Login Success", user);

          if (user.emailVerified === false) {
              alert('Please verify your email address');
              return;
          }

          // Save user data to localStorage (if needed)
          localStorage.setItem('user', JSON.stringify(user));

          // Redirect to the dashboard page
          window.location.pathname = '/dashboard'; // Change '/dashboard' to your actual dashboard path
      })
      .catch((error) => {
          console.error("ERROR", error.message);
          // Handle and display the error appropriately
          alert('Login failed. Check your email and password.');
      });
}
