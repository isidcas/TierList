import { isRequired, isBetween, isValidPassword } from '../components/validator';

export function Login() {
  const view = `
    <div class="login">
      <form id="signup" class="form">
        <h1>Iniciar Sesión</h1>
        <div class="form-field">
          <label for="username">Nombre de usuario:</label>
          <input type="text" name="username" id="username" autocomplete="off">
          <small></small>
        </div>
        <div class="form-field">
          <label for="password">Contraseña:</label>
          <input type="password" name="password" id="password" autocomplete="off">
          <small></small>
        </div>
        <div class="form-field">
          <input type="submit" value="Entrar">
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
        showError(usernameEl, "El nombre no puede estar en blanco");
      } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `El nombre debe tener entre ${min} y ${max} caracteres`);
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
        showError(passwordEl, 'La contraseña no puede estar en blanco.');
      } else if (!isValidPassword(password)) {
        showError(passwordEl, 'La contraseña no cumple los requisitos.');
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
