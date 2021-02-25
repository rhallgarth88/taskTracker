import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Do a thing",
        day: "Feb 3rd at 2:30pm",
        reminder: false,
},
    {
        id: 2,
        text: "Do two things",
        day: "Feb 4th at 2:30pm",
        reminder: true,
},
    {
        id: 3,
        text: "Do three things",
        day: "Feb 5th at 2:30pm",
        reminder: false,
}
])

//Add Task

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">

      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Currently no tasks to show.'}
    </div>
  );
}

export default App;
