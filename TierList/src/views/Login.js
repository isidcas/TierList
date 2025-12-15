import { isRequired, isBetween, isValidPassword } from '../components/validator';
import { t } from '../i18n';

export function Login() {
  const view = `
    <div class="login">
      <form id="signup" class="form">
        <h1>${t('login.title')}</h1>
        <div class="form-field">
          <label for="username">${t('login.username')}</label>
          <input type="text" name="username" id="username" autocomplete="off" placeholder="${t('login.username_placeholder', {min:3, max:40})}">
          <small></small>
        </div>
        <div class="form-field">
          <label for="password">${t('login.password')}</label>
          <input type="password" name="password" id="password" autocomplete="off" placeholder="${t('login.password_placeholder')}">
          <small></small>
        </div>
        <div class="form-field">
          <input type="submit" value="${t('login.button')}">
        </div>
      </form>
    </div>
  `;

  setTimeout(() => {
    const formEl = document.getElementById("signup");
    const usernameEl = document.getElementById("username");
    const passwordEl = document.getElementById("password");

    const showError = (input, message) => {
      const formField = input.parentElement;
      formField.classList.remove('success');
      formField.classList.add('error');
      formField.querySelector('small').textContent = message;
    };

    const showSuccess = (input) => {
      const formField = input.parentElement;
      formField.classList.remove('error');
      formField.classList.add('success');
      formField.querySelector('small').textContent = '';
    };

    const checkUsername = () => {
      let valid = false;
      const username = usernameEl.value.trim();
      const min = 3, max = 40;
      if (!isRequired(username)) {
        showError(usernameEl, t('login.error_required'));
      } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, t('login.error_username_length', {min, max}));
      } else {
        showSuccess(usernameEl);
        valid = true;
      }
      return valid;
    };

    const checkPassword = () => {
      let valid = false;
      const password = passwordEl.value.trim();
      if (!isRequired(password)) {
        showError(passwordEl, t('login.error_password_required'));
      } else if (!isValidPassword(password)) {
        showError(passwordEl, t('login.error_password_invalid'));
      } else {
        showSuccess(passwordEl);
        valid = true;
      }
      return valid;
    };

    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      if (checkUsername() && checkPassword()) {
        location.hash = "#/";
      }
    });

  }, 0);

  return view;
}
