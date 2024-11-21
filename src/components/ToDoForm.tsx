function ToDoForm(){
    const handleSubmit = (e) => {
        e.preventDefault()
      console.log(e);
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