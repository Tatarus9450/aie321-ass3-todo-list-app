export default function Page() {
  return (
    <main className="wrap">
      <h1>Todo List App</h1>

      <div className="input-row" aria-hidden="true">
        <input type="text" placeholder="Enter a new task.." />
        <button type="button">Add</button>
      </div>

      <ul>
        <li>
          <input type="checkbox" />
          <span>Sleep</span>
        </li>
        <li>
          <input type="checkbox" defaultChecked />
          <span className="done">Join React class</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>Do react homework</span>
        </li>
      </ul>
    </main>
  );
}
