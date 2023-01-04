import html from "html-literal";
// import Chart from "chart.js/auto";

export default state => html`
  <!-- <section id="progress">
    <h2>One step at a time!</h2>
    <canvas id="habChart" style="width:100%;max-width:700px"></canvas>
    <script>
      myChart("habChart", {
        type: "bubble",
        data: {},
        options: {
          legend: { display: false },
          scales: {}
        }
      });
    </script>
  </section> -->

  <section id="habit">
    <table id="habits">
      <tr>
        <th>Habit</th>
        <th>Action</th>
      </tr>
      ${state.habits
        .map(habit => {
          return `<tr><td>${habit.habit}</td><td>${habit.action}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
