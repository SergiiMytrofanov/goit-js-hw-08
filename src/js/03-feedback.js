
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const mailInput = feedbackForm.querySelector('#email-input');
const textArea = feedbackForm.querySelector('#text-input');
const buttonSubmit = feedbackForm.querySelector('#button-submit');

const saveToLocal = throttle(() => {
    const formInput = {
        email: mailInput.value,
        textMessage: textArea.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(formInput));
}, 500);

mailInput.addEventListener('input', saveToLocal);
textArea.addEventListener('input', saveToLocal);

const takeFromLocal = () => {
    const savedState = localStorage.getItem("feedback-form-state");
    if (savedState) {
        const formState = JSON.parse(savedState);
        mailInput.value = formState.email;
        textArea.value = formState.textMessage;
    }
};

takeFromLocal();

const clearForm = () => {
    localStorage.clear();
    mailInput.value = '';
    textArea.value = '';
};

feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    clearForm();
});




