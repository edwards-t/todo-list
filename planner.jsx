/*
You to not need to change this planner.jsx file. This task only requires changes to the index.html file and the styles.css file.
*/

function App() {
  const addEvent = (text, dateLocalStr) => {
    const newEvents = [
      ...todos,
      {
        text: text,
        isCompleted: false,
        date: dateLocalStr,
      },
    ];
    setTodos(newEvents);
  };

  const EventForm = () => {
    const [value, setValue] = React.useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addEvent(value, new Date().toLocaleTimeString());
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          id="task-input"
          type="text"
          value={value}
          placeholder="Add Event..."
          onChange={(e) => setValue(e.target.value)}
        />
        <span>Press Enter to Submit</span>
      </form>
    );
  };

  const removeEvent = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    console.log(index, temp);
    setTodos(temp);
  };

  const [todos, setTodos] = React.useState([
    {
      text: "Workout",
      date: "10:30:00 AM",
    },
    {
      text: "Study",
      date: "02:00:00 PM",
    },
    {
      text: "Plan getaway",
      date: "06:30:00 PM",
    },
    {
      text: "Doctor's appointment",
      date: "11:05:00 AM",
    },
  ]);
  return (
    <>
      {todos.map((todo, i) => (
        <div
          key={i}
          title="click to remove item"
          className="planner-item"
          onClick={(i) => removeEvent(i)}
        >
          {todo.text} - {todo.date || "N/A"} (-)
        </div>
      ))}
      <EventForm addEvent={addEvent} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
