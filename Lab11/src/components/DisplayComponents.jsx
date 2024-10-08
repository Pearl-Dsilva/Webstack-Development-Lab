import "./DisplayComponents.css";

export default function DisplayComponents({
  tasks,
  display_a_message,
  setTasksList,
}) {
  return tasks.map((element) => (
    <div key={element.name} className="displayComponent" style={{ border: '1px solid white', borderRadius: '10px' }}>
      <div
        style={{
          background: "#000",
          border: "1px solid black",
          borderRadius: "15px",
          margin: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4 style={{ textAlign: "center" }}>{element.name}</h4>
        <button
          style={{
            background: "d9d9d9",
            border: "1px solid black",
            borderRadius: "15px",
            margin: "5px",
            padding: "5px",

          }}
          onClick={() => display_a_message(element.name)}>Delete</button>
        <button
          style={{
            background: "d9d9d9",
            border: "1px solid black",
            borderRadius: "15px",
            margin: "5px",
            padding: "5px",

          }}
          onClick={() => setTasksList(element)}
        // style={{ marginTop: "10px" }}
        >
          Update
        </button>
      </div>
    </div>
  ));
}

function card() { }
