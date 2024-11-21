import { useState } from "react"
import ToDoForm from "./components/ToDoForm"
import ToDoList from "./components/ToDoList"



function App() {
const [tasks,setTasks] = useState([]);

  return (
    <>
    <ToDoForm tasks = {tasks} setTasks={setTasks}/>
    <ToDoList/>
    </>
  )
}

export default App
