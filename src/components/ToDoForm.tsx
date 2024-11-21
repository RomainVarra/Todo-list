function ToDoForm({setTasks, tasks}){
    const handleSubmit = (e) => {
        e.preventDefault()
    setTasks(...tasks,[e.target[0].value]);
    }
return(
    <div>
    <h1> Le formulaire </h1>
    <form onSubmit={handleSubmit}>
<input type="text" />
    <button type="submit" >Ajouter</button>
    </form>
    </div>
)
}

export default ToDoForm 