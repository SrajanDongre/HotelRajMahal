var nameError = document.getElementById('name-er');
var emailError = document.getElementById('email-er');
var phoneError = document.getElementById('phone-er');
var submitError = document.getElementById('submit-er');

function validateName(){
    var conName = document.getElementById('name').value;

    if(conName.length == 0){
        nameError.innerHTML = '* Name is required';
        return false;
    }
    if(!conName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '* Write Full Name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateEmail(){
    var conEmail = document.getElementById('email').value;

    if(conEmail.length == 0){
        emailError.innerHTML = '* Email is required';
        return false;
    }
    if(!conEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = '* Enter valid Email'
        return false;
    }

    emailError.innerHTML= '';
    return true;
}

function validatePhone(){
    var conPhone = document.getElementById('phone').value;

    if(conPhone.length == 0){
        phoneError.innerHTML = '* Phone Number is required';
        return false;
    }
    if(conPhone.length !== 10){
        phoneError.innerHTML = '* Enter valid Phone number';
        return false;
    }
    if(!conPhone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = '* Enter valid Phone number';
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone()){
        submitError.style.display ='block';
        submitError.innerHTML = 'Please fix the error to Submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
    submitError.innerHTML = '';
    return true;
}