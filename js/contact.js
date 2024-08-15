const input = (type) => {
  const input = document.createElement('input');
  input.type = type;
  return input;
}

const contact = () => {
  const contact = document.createElement('div');
  contact.id = 'contact';

  const form = document.createElement('form');
  const nameInput = input('text');
  nameInput.placeholder = 'your name';
  const emailInput = input('email');
  emailInput.placeholder = 'your email';
  const message = document.createElement('textarea');
  message.rows = 6;
  message.cols = 20;
  message.placeholder = 'type here something that you have to say...';
  const submitBtn = input('submit');
  submitBtn.value = 'Send';

  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(message);
  form.appendChild(submitBtn);
  contact.appendChild(form);

  return contact;
}

export default contact;