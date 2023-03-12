import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const SAVED_DATA = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleFormDataInput, 1000));
updateFormTextContent();

function handleFormDataInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(SAVED_DATA, JSON.stringify(formData));
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(formData);

  event.currentTarget.reset();
  textareaEl.textContent = '';
  localStorage.removeItem(SAVED_DATA);
}

function updateFormTextContent() {
  const savedMessage = localStorage.getItem(SAVED_DATA);
  const parsedData = JSON.parse(savedMessage);

  if (parsedData) {
    const { email, message } = parsedData;
    if (email) {
      inputEl.value = email;
    }
    textareaEl.textContent = message;
    formData = parsedData;
  }
}
