import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {show} from "../../utilities/notebooks-api";
import {update} from "../../utilities/notebooks-api";
import { useNavigate } from "react-router-dom";

export default function EditName() {
    let {notebookId} = useParams()
    console.log(notebookId)
    // const notebook = show(notebookId)
    // console.log(notebook.name)
    const [notebook, setNotebook] = useState({
        name: '',
        sessions: []
        })

    useEffect(() => {
        async function fetchNotebookAndUpdateState() {
            const response = await show(notebookId)
            setNotebook(response)
            console.log(response) //should show id
        }
        fetchNotebookAndUpdateState()
    }, [notebookId])
    const navigate = useNavigate()
    const onClick = function (event) {
        event.preventDefault()
        update(notebookId, notebook)
        navigate('/')
      }

    return (
        <>
        <h3>Edit Name</h3>
        <form>
<div className="input">
            <label>Name: </label>
          <input type="text" name="name" placeholder={notebook.name} value={notebook.name} onChange={(e) => setNotebook({ ...notebook, name: e.target.value })}/>
          </div>
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