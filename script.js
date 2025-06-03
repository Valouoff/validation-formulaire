const btnSubmit = document.getElementById('btnSubmit');
const btnView = document.getElementById('btnView')

const inputName = document.getElementById('name');
const inputFirstname = document.getElementById('firstname');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputAge = document.getElementById('age');

const warningName = document.getElementById('warningName');
const warningFirstname = document.getElementById('warningFirstname');
const warningEmail = document.getElementById('warningEmail');
const warningPassword = document.getElementById('warningPassword');
const warningAge = document.getElementById('warningAge');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputName.value.length < 3) {
        warningName.style.display = "block"
        inputName.classList.add('activeInput')
    } else {
        warningName.style.display = "none"
        inputName.classList.remove('activeInput')
    }

    if (inputFirstname.value.length < 2) {
        warningFirstname.style.display = "block"
        inputFirstname.classList.add('activeInput')
    } else {
        warningFirstname.style.display = "none"
        inputFirstname.classList.remove('activeInput')
    }

    if (isValidEmail(inputEmail.value)) {
        warningEmail.style.display = "none"
        inputEmail.classList.add('activeInput')
    } else {
        warningEmail.style.display = "block"
        inputEmail.classList.remove('activeInput')
    }

    if (isValidPassword(inputPassword.value)) {
        warningPassword.style.display = "none"
        inputPassword.classList.add('activeInput')
    } else {
        warningPassword.style.display = "block"
        inputPassword.classList.remove('activeInput')
    }

    if (inputAge.value < 18 || inputAge.value > 99) {
        warningAge.style.display = "block"
        inputAge.classList.add('activeInput')
    } else {
        warningAge.style.display = "none"
        inputAge.classList.remove('activeInput')
    }
})

btnView.addEventListener('click', () => {
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
    } else if (inputPassword.type === "text") {
        inputPassword.type = "password"
    }
})