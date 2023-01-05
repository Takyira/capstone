import html from "html-literal";

export default () => html`
  <section id="new-habit">
    <form id="new-habit" method="POST" action="">
      <h2>Create or Destroy?</h2>
      <div>
        <label for="habit">Habit</label>
        <input type="text" name="habit" id="habit" placeholder="" required />
      </div>
      <div>
        <label for="action">Action</label>
        <select id="action" name="action">
          <option value="action">Select an Action</option>
          <option value="establish">Establish</option>
          <option value="demolish">Demolish</option>
          <option value="progress">In progress</option>
        </select>
      </div>
      <div>
        <label for="start">Start Date:</label>
        <input type="date" id="start" name="start" value="" />
      </div>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
`;
