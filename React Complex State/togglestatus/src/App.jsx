
import { useState } from "react";

function App() {

    const [task, setTask] = useState({
        title: "Learn React",
        completed: false
    });

    function toggleStatus() {
        setTask(prevTask => ({
            ...prevTask,
            completed: !prevTask.completed
        }));
    }

    return (
        <div>
            <h2>Task Tracker</h2>

            <p>
                {task.title} - {task.completed ? "Completed" : "Pending"}
            </p>

            <button onClick={toggleStatus}>
                Toggle Status
            </button>
        </div>
    );
}

export default App;
