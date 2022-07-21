const formExitBtn = document.querySelectorAll('.form-exit');
// Sign Up Btn
const signUpBtn = document.querySelectorAll('.sign-up');
// Signup Form
const signUpBackground = document.querySelector('#signup');
const signUpBackgroundForm = document.querySelectorAll('#signup form');
const signUpBox = document.querySelector('#createAcc');
const loginBox = document.querySelector('#login');
const formLink = document.querySelector('.form-link')
const formLinkEach = document.querySelectorAll('.form-link')
// Form Links
const createAccBtn = document.querySelector('#createAccount');
const backToLoginBtn = document.querySelector('#backToLogin');
// Form Submit
const signUpSubmit = document.querySelector('#signUpSubmit')
const loginSubmit = document.querySelector('#loginSubmit')
const errorMessageContainers = document.querySelectorAll('#createAcc .form-input-group .form-input-error-message')
// Form Inputs
const loginUsername = document.querySelector('#loginUsername')
const loginPassword = document.querySelector('#loginPassword')

const signUpUsername = document.querySelector('#signUpUsername')
const signUpEmail = document.querySelector('#signUpEmail')
const signUpPassword = document.querySelector('#signUpPassword')
const signUpPasswordConfirm = document.querySelector('#signUpPasswordConfirm')

// Close Window
formExitBtn.forEach(e => {
    e.addEventListener('click', () => {
        signUpBackground.classList.add('hidden')
        signUpBox.classList.add('hidden')
        loginBox.classList.add('hidden')
    })
})

// Also closes the window if user pressed in background
signUpBackground.addEventListener('click', (e) => {
    if (e.target.contains(formLink)) {
        if(!loginBox.contains(e.target) && !loginBox.classList.contains('hidden')) {
            signUpBackground.classList.add('hidden')
        }
        else if (!signUpBox.contains(e.target) && !signUpBox.classList.contains('hidden')) {
            signUpBackground.classList.add('hidden')
        }
    }
})

/* Window Load
=============================================================================================*/ 
document.addEventListener('DOMContentLoaded', () => {
    signUpBackground.classList.add('hidden')
    signUpBox.classList.add('hidden')
    loginBox.classList.add('hidden')
})

/* Sign-up Button
=============================================================================================*/ 
signUpBtn.forEach(e => {
    e.addEventListener('click', () => {
        signUpBackground.classList.remove('hidden')
        signUpBox.classList.remove('hidden')
        loginBox.classList.add('hidden')
    })
})

createAccBtn.addEventListener('click', () => {
    loginBox.classList.add('hidden')
    signUpBox.classList.remove('hidden')
})

backToLoginBtn.addEventListener('click', () => {
    loginBox.classList.remove('hidden')
    signUpBox.classList.add('hidden')
})

/* Form Inputs
=============================================================================================*/ 
// Show error in login
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form-message')

    messageElement.textContent = message;
    messageElement.classList.remove('form-message-success', 'form-message-error');
    messageElement.classList.add(`form-message-${type}`)
}

// Sets error message when user input field doesn't met the requirements
function setInputError(inputElement, message) {
    inputElement.classList.add('form-input-error');
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = message;
}

// Clears error message next to inputs
function clearInputError(inputElement) {
    inputElement.classList.remove('form-input-error');
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = '';
}

loginSubmit.addEventListener("click", e => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    // Set the login Error
    // This will be changed when working with back-end
    setFormMessage(loginBox, 'error', 'Invalid username/password combination')
})


signUpSubmit.addEventListener("click", e => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    // Set the SignUp Error
    // Show error if any fields are empty
    if(signUpUsername.value === '' || signUpEmail.value === '' || signUpPassword.value === '' || signUpPasswordConfirm.value === '') {
        setFormMessage(signUpBox, 'error', 'You have empty fields')
    }
    // Show error if any requirements are not met
    else if(signUpUsername.value.length < 5 || !signUpEmail.value.match(/\S+@\S+\.\S+/) || signUpPassword.value.length < 3 || signUpPasswordConfirm.value !== signUpPassword.value) {
        setFormMessage(signUpBox, 'error', 'You have not met the requirements')
    }
    // If all conditions are met (This will be changed when worked with back-end)
    else {
        setFormMessage(signUpBox, 'success', 'Requirements Met!')
    }
    
})

document.querySelectorAll('.form-input').forEach(inputElement => {
    // When the user takes there focus out of the input field
    inputElement.addEventListener('blur', e => {
        // Username
        if (e.target.id === 'signUpUsername' && e.target.value.length > 0 && e.target.value.length < 5) {
            setInputError(inputElement, "Username must be at least 5 characters in length")
        }

        // Email
        if (e.target.id === 'signUpEmail' && !e.target.value.match(/\S+@\S+\.\S+/) && e.target.value.length > 0) {
            setInputError(inputElement, "Please enter a vaild email address")
        }

        // Password
        if (e.target.id === 'signUpPassword' && e.target.value.length > 0 && e.target.value.length < 3) {
            setInputError(inputElement, "Password must be at least 3 characters in length")
        }

        // Confirm Password
        if (e.target.id === 'signUpPasswordConfirm' && e.target.value !== signUpPassword.value) {
            setInputError(inputElement, "Password doesn't match")
        }
    })

    inputElement.addEventListener('input', e => {
        clearInputError(inputElement);
    })
})

// Reset input fields and submit messages
formLinkEach.forEach (e => {
    e.addEventListener('click', () => {
        if (e.id === "backToLogin") {
            signUpUsername.value = '';
            signUpEmail.value = '';
            signUpPassword.value = '';
            signUpPasswordConfirm.value = '';
    
            clearInputError(signUpUsername)
            clearInputError(signUpEmail)
            clearInputError(signUpPassword)
            clearInputError(signUpPasswordConfirm)
            
            setFormMessage(signUpBox, 'success', '')
        }
        else if (e.id === "createAccount") {
            loginUsername.value = '';
            loginPassword.value = '';

            setFormMessage(loginBox, 'success', '')
        }
    })
})