import html from "html-literal";

export default state =>
  html`
    <section id="quote">
      <h2>
        "The secret of your future is hidden in your daily routine" -Mike
        Murdock
      </h2>
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </div>
      <div>
        <label for="Password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <a href="Progress.js">Login</a>
    </section>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  `;
