var emailField = document.getElementById('form-email');
var submitButton = document.getElementById('form-submit');
var errorIcon = document.getElementById('error-icon');
var inputContainer = document.getElementById('input-container');
var errorMessage = document.getElementById('error-message');

submitButton.addEventListener('click', function (event) {

    const isValidEmail = emailField.checkValidity();
    if (!isValidEmail) {
        event.preventDefault();
        errorIcon.classList.add('content__form__input-container-error--active');
        errorMessage.classList.add('content__form__error--active');
        inputContainer.style.borderColor = 'red';
    } else {
        errorMessage.classList.remove('content__form__error--active');
        errorIcon.classList.remove('content__form__input-container-error--active');
        inputContainer.style.borderColor = 'hsl(0, 36%, 70%)';
    }

});