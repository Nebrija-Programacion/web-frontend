const Login = () => (
  <div class="login-box">
    <h2>Login</h2>
    <form method="post">
      <div class="form-field">
        <input type="text" name="username" placeholder="Username" required />
      </div>
      <div class="form-field">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="submit-button">
        Log In
      </button>
    </form>
  </div>
);

export default Login;
