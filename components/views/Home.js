import html from "html-literal";
import starrysky from "/assets/img/starrysky.jpg";

export default state =>
  html`
    <section id="quote">
      <!-- <div class="middle-img"></div><img  src="${starrysky}" /></div> -->
      <h2>
        "The secret of your future is hidden in your daily routine" -Mike
        Murdock
      </h2>
    </section>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  `;
