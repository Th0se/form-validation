const email = document.querySelector(`#emailAddress`);
const emailError = document.querySelector(`#emailAddress + span.error`);
email.addEventListener(`input`, () => {
    if (email.validity.valid) {
        emailError.textContent = ``;
        emailError.classList.remove(`active`);
    } else {
        emailErrorDisplay();
    };
});

const emailErrorDisplay = () => {
    if (email.validity.valueMissing) {
        emailError.textContent = `Do not leave this field empty.`;
    } else if (email.validity.typeMismatch) {
        emailError.textContent = `Enter a valid email address, for example 'Baikal@lake.geo' or 'nemo@fiction.me'.`;
    };

    emailError.classList.add(`active`);
};

const postodeCheck = () => {
    const constraints = {
        France: `^\\d{5}$`,
        Germany: `^\\d{5}$`,
        'United Kingdom': `[A-Z]{1,2}[0-9R][0-9A-Z]?\\s*[0-9][A-Z-[CIKMOV]]{2}`,
        India: `^\\d{6}$`,
        Indonesia: `^\\d{5}$`
    };
    const countryValue = `${country.value}`;
    const constraint = new RegExp(constraints[countryValue], ``);
    
    if (!constraint.test(postcode.value)) {
        postcode.setCustomValidity(`Enter your postcode in the correct format.`);
    } else {
        postcode.setCustomValidity(``);
    };
};

const country = document.querySelector(`#country`);
const postcode = document.querySelector(`#postcode`);
postcode.addEventListener(`input`, () => {
    postodeCheck();
});
country.addEventListener(`input`, () => {
    postodeCheck();
});

const password = document.querySelector(`#password`);
const passwordError = document.querySelector(`#password + span.error`);
password.addEventListener(`input`, () => {
    passwordCheck();
});

const passwordCheck = () => {
    const constraint = new RegExp(`/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*).{16,72}$/`, ``);

    if (!constraint.test(password.value)) {
        password.setCustomValidity(`Password must be at 16 to 72 characters long,
                                        contains both upper and lower case letters,
                                        contains at least 2 numbers,
                                        and contains special characters`);
    } else {
        password.setCustomValidity(``);
    }
};

const passwordConfirm = document.querySelector(`#passwordConfirm`);
const passwordConfirmError = document.querySelector(`#passwordConfirm + span.error`);
passwordConfirm.addEventListener(`input`, () => {
    if (passwordConfirm.value === password.value) {
        passwordConfirmError.textContent = ``;
        passwordConfirmError.classList.remove(`active`);
        passwordConfirm.style.backgroundColor = `rgba(255, 255, 255, 0)`;
    } else {
        passwordConfirmError.textContent = `Value must be identical to the password field's value.`
        passwordConfirmError.classList.add(`active`);
        passwordConfirm.style.backgroundColor = `rgba(255, 0, 0, 0.199)`;
    };
});