
// add click event handler of the submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    // get the email from email feild
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // get the password from the password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // check email and password
    if(email === 'sontan@baapemail.com' && password === 'secret'){
        document.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})