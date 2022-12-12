import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {show} from "../../utilities/notebooks-api";
import {update} from "../../utilities/notebooks-api";

export default function EditName() {
    let {notebookId} = useParams()
    console.log(notebookId)
    // const notebookResult = show(notebookId)
    // console.log(notebookResult.name)
    const [notebook, setNotebook] = useState({
        name: '',
        sessions: []
        })

    useEffect(() => {
        async function fetchNotebookAndUpdateState() {
            const response = await show(notebookId)
            setNotebook(response)
            console.log(response)
        }
        fetchNotebookAndUpdateState()
    }, [notebookId])
    const onClick = function (event) {
        event.preventDefault()
        update(notebookId, notebook)
      }

    return (
        <>
        <h1>Edit Name</h1>
        <form>
            <label>Name: </label>
          <input type="text" name="name" placeholder={notebook.name} value={notebook.name} onChange={(e) => setNotebook({ ...notebook, name: e.target.value })}/>
<button type="submit" onClick={onClick}>Save</button>
      {notebook.sessions.map((session, key) => (
        <div key={key} >
          <div>{session.name}</div>
        </div>
      ))}
</form>
        </>
    )
}