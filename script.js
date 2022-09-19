const form = document.getElementById("form");
const pw1 = document.getElementById("password")
const pw2 = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("pwCheck");
const copyrightYear =  document.querySelector(".footer--year")
let isPasswordMatched = null;

function comparePassword(e) {
    if ((pw1.value !== '' && pw2.value !== pw1.value) && (pw2.value !== '' && pw1.value !== pw2.value)) {
        errorMessage.textContent = '* Passwords do not match!'
        errorMessage.classList.add('pwError');
        isPasswordMatched = false;
    }
    if (pw1.value === pw2.value) {
        errorMessage.textContent = '';
        errorMessage.classList.remove('pwError');
        isPasswordMatched = true;
    }

}

function checkForm(e) {
    if (!isPasswordMatched) {
        e.preventDefault();
        comparePassword();
    } else {
        return;
    }
}


pw1.addEventListener('keyup', comparePassword);
pw2.addEventListener('keyup', comparePassword);
form.addEventListener('submit', checkForm);

/* footer */
copyrightYear = new Date().getFullYear()

