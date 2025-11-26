export function Login() {
return `
<div class="login">
    <form id="signup" class="form">
      <h1>Registrarse</h1>
      <div class="form-field">
        <label for="username">Nombre de usuario:</label>
        <input type="text" name="username" id="username" autocomplete="off">
        <small></small>
      </div>
      <div class="form-field">
        <label for="phone">Contraseña:</label>
        <input type="password" name="password" id="password" autocomplete="off">
        <small></small>
      </div>
      <div class="form-field">
        <input type="submit" value="Registrarse">
      </div>
    </form>
  </div>
`;
}