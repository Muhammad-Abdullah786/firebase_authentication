import{
  auth,
  ref,signInWithEmailAndPassword,
  database
}from './firebaseconfig.js'


let email = document.getElementById('exampleInputEmail1').value
let password = document.getElementById('exampleInputPassword1').value

signInWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
let loginDate = new Date()   
 const user = userCredential.user;
    update(ref(database, 'user/' + user.uid), {
        lastLogin:loginDate
      })
      .then(() => {
        // Data saved successfully!
        alert("user logged in in real time database")
      })
      .catch((error) => {
        console.log('error' , error);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("there is an error " , errorMessage,"and this is error code ", errorCode);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error " , errorCode,"the is error message --->", errorMessage);
  });