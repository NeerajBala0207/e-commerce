const firebaseConfig = {
    apiKey: "AIzaSyA9cnIJRgKjoVuIiorqyCWuohVOFPSc-2c",
    authDomain: "e-commerce-1c830.firebaseapp.com",
    databaseURL: "https://e-commerce-1c830-default-rtdb.firebaseio.com",
    projectId: "e-commerce-1c830",
    storageBucket: "e-commerce-1c830.appspot.com",
    messagingSenderId: "401928202020",
    appId: "1:401928202020:web:c98c1fc23521c0726075b1",
    measurementId: "G-2ELFFVGQWT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth=app.auth()
  const database=app.database()
  //set up our register function

  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    favourite song = document.getElementById('favourite_song').value
    milk_before_cereal = document.getElementById('milk_before_cereal').value
    if (validate_email(email)== false || validate_password (password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
        }
        if (validate_field(full_name) == false || validate_field(full_name) == false || validate_field (full_name) == false){
        alert('One or More extra fields isoutta Line!!')    
            return
    }

// Move on with Auth
auth.createUserWith EmailAnd Password (email, password)
.then(function() {

    var user = auth.currentUser
    // Add this user to Firebase Database
    var database_ref = database.ref()
    // Create User data
    var user_data = {
    email : email,
    full_name : full_name,
    favourite song : favourite song,
    milk_before_cereal : milk_before_cereal,
    last_login: Date.now()
    }
    database_ref.child('users/' + user.uid).set(user_data)
    alert('User Created!!')

})
.catch(function(error) {
// Firebase will u
var error_code = error.code
var error_message = error.message
alert(error_message)
})

  }






    function validate_email(email) {
    expression = /^[^@]+@\w+(\. \w+) +\w$/
    if (expression.test (email) == true) {
    return true 
    }else{
        return false
    }
    }


    function validate_password(password) {
        // Firebase only accepts lengths greater than 6
        if(password‹6)
        {
            return false
        } 
        else
        {
        return true
        }}
    function validate_field(field) {
        if (field == null) {
        return false
        }}