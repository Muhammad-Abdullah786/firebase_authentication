
import {
  auth,
  signInWithEmailAndPassword,
  // sendPasswordResetEmail
  provider,signInWithPopup, gitProvider
} from './firebaseconfig.js'

// Make sure to select the elements by their correct IDs
var email = document.getElementById('exampleInputEmail1');
var password = document.getElementById('exampleInputPassword1');
var loginForm = document.querySelector('form'); // Select the form element
let googleLoginBtn = document.getElementById('googleLogin')
// Use the 'submit' event on the form, not 'click' on the button
loginForm.addEventListener('submit', handleLogin);
googleLoginBtn.addEventListener('click', handleLogin)

function handleLogin(e) {
  e.preventDefault();

  // Use the correct function to sign in with email and password
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
          // Access the user from the userCredential object
          const user = userCredential.user;

          console.log("Login Success", user);

          if (user.emailVerified === false) {
              alert('login sucsesfull but Please verify your email address');
              window.location.pathname = './dashboard.html'; // Change '/dashboard' to your actual dashboard path
              return;
            }

            // Save user data to localStorage (if needed)
          localStorage.setItem('user', JSON.stringify(user));

          // Redirect to the dashboard page
      })
      .catch((error) => {
          console.error("ERROR", error.message);
          // Handle and display the error appropriately
          alert('Login failed. Check your email and password.');
        });
      signInWithPopup(auth, provider )
        .then((result) => {
          console.log("clicked", result);
          
          localStorage.setItem('user', JSON.stringify(result.user));
          window.location.pathname = './dashboard.html'; // Change '/dashboard' to your actual dashboard path
        
        }).catch((error) => {
          console.log("error", error);
        });  


        signInWithPopup(auth, gitProvider)
  .then((result) => {
console.log("clicked", result);    

  }).catch((error) => {

  });
    }