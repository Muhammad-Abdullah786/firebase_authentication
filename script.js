import{
    auth,
    createUserWithEmailAndPassword,
    set,ref,
    database
}from './firebaseconfig.js'


let submitData = document.getElementById('submitData')

submitData.addEventListener('click', (e)=>{
  e.preventDefault()

  let email = document.getElementById('exampleInputEmail1').value
let password = document.getElementById('exampleInputPassword1').value
let confirmPass = document.getElementById('exampleInputPassword2').value

  createUserWithEmailAndPassword(auth, email, password, confirmPass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("working");
    set(ref(database, 'user/' + user.uid), {
      email: email,
      password: password,
    })
    .then(() => {
      // Data saved successfully!
      alert("user created in real time database")
    })
    .catch((error) => {
      console.log('error' , error);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("there is an error " , errorMessage,"and this is error code ", errorCode);
  });

})









