var FnameError = document.getElementById('Fname-er');
var LnameError = document.getElementById('Lname-er');
var CheckInError = document.getElementById('CheckIn-er');
var CheckOutError = document.getElementById('CheckOut-er');
var GuestError = document.getElementById('Guest-er');
var RoomError = document.getElementById('Room-er');
var submitError = document.getElementById('submit-er');

function validateFName(){
    var conFName = document.getElementById('Fname').value;

    if(conName.length == 0){
        FnameError.innerHTML = '* First Name is required';
        return false;
    }
    FnameError.innerHTML = '';
    return true;
}

function validateLName(){
    var conLName = document.getElementById('Lname').value;

    if(conName.length == 0){
        LnameError.innerHTML = '* Last Name is required';
        return false;
    }
    LnameError.innerHTML = '';
    return true;
}

function validateCheckIn(){
    var conCheckIn = document.getElementById('CheckIn').value;

    if(conCheckIn.length == 0){
        CheckInError.innerHTML = '* Please select Check-in Date';
        return false;
    }
    CheckInError.innerHTML = '';
    return true;
}

function validateCheckOut(){
    var conCheckOut = document.getElementById('CheckOut').value;

    if(conCheckOut.length == 0){
        CheckOutError.innerHTML = '* Please select Check-out Date';
        return false;
    }
    CheckOutError.innerHTML = '';
    return true;
}

function validateGuest(){
    var conGuest = document.getElementById('Guest').value;

    if(conGuest.length == 0){
        GuestError.innerHTML = '* Please enter Number of Guests';
        return false;
    }
    GuestError.innerHTML = '';
    return true;
}

function validateRoom(){
    var conRoom = document.getElementById('Guest').value;

    if(conRoom.length == 0){
        RoomError.innerHTML = '* Please select Room';
        return false;
    }
    RoomError.innerHTML = '';
    return true;
}

function validateForm(){
    if(!validateFName() || !validateLName() || !validateCheckIn() || !validateCheckOut() || !validateGuest() || !validateRoom()){
        submitError.style.display ='block';
        submitError.innerHTML = 'Please fix the error to Submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
    submitError.innerHTML = 'Thank you for choosing Hotel Raj Mahal, We will contact you shortly';
    return true;
}