const Register = () => (
  <div class="register-container">
    <h2>Register</h2>
    <form action="/register" method="POST">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Register</button>
      <p class="register-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  </div>
);

export default Register;
