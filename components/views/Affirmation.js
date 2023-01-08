import html from "html-literal";

export default state => html`
  <section id="affirmation">
    <div class="out">
      <img src=${state.gif.data.images.downsized.url} />
    </div>
  </section>
`;
