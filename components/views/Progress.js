import html from "html-literal";

export default state => html`
  <section id="habit">
    <table id="habits">
      <tr>
        <th>Habit</th>
        <th>Action</th>
        <th>Date</th>
      </tr>
      ${state.habits
        .map(habit => {
          return `<tr><td>${habit.habit}</td><td>${habit.action}</td><td>${habit.start}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
