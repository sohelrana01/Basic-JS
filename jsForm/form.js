function showMessage(input, message, type){
    const msg = input.parentNode.querySelector('small');
    msg.innerText = message;

    input.className = type ? 'success' : 'error';
    return type
}

function showError(input, message){
    return showMessage(input, message, false);
}

function showSuccess(input, message){
    return showMessage(input, '', true);
}

function hasValue(input, message){
    if(input.value.trim() === ''){
        return showError(input, message);
    }
    return showSuccess(input)
}

function validateEmail(input, requiredMsg, invalidMsg){
    if(!hasValue(input, requiredMsg)){
        return false;
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if(!emailRegex.test(email)){
        return showError(input, invalidMsg)
    }
    return true;
}

const form = document.getElementById('signup');

const NAME_REQUIRED = 'please enter your name';
const EMAIL_REQUIRED = 'please enter your email';
const EMAIL_INVALID = 'please enter a corrent email address format';

form.addEventListener('submit', (event)=>{
    event.preventDefault()     // default submition

    let nameValid = hasValue(form.elements['name'], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements['email'], EMAIL_REQUIRED, EMAIL_INVALID)

    if(nameValid && emailValid){
        alert('Demo Only. No form was posted')
        console.log(nameValid.value);
    }
})