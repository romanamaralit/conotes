import {useState, useEffect} from "react";
import {useParams, Link, Navigate} from "react-router-dom";
import {index} from "../../utilities/notebooks-api";
import {deleteNotebook} from "../../utilities/notebooks-api";
import { useNavigate } from "react-router-dom";
// import {updateNotebook} from "../../utilities/notebooks-api";

export default function NotebookListPage() {
    const [notebooks, setNotebooks] = useState()

    useEffect(() => {
    async function fetchNotebooksAndUpdateState() {
        const response = await index()
        setNotebooks(response)
    }
    fetchNotebooksAndUpdateState()
    }, [])

    const removeNotebookById = (id) => {
        setNotebooks(current =>
            current.filter(notebook => {
                return notebook._id !== id
            }))
    }

    const deleteButton = (event) => {
        deleteNotebook(event.target.value)
        removeNotebookById(event.target.value)
    }

    const navigate = useNavigate()
    const editNotebook = (event) => {
        console.log(event.target.value)
        navigate("/edit/"+ event.target.value)
    }

    return (
        <>
            <h1>CoNotes!</h1>
            {
                notebooks ?
                    <div>{notebooks.map(notebook =>
                        <div key={notebook._id}>
                            <Link to={`/notebooks/${notebook._id}`}>{notebook.name}</Link>
                            <button onClick={deleteButton}
                                value={notebook._id}>X</button>
                                <button onClick={editNotebook}
                                value={notebook._id}>Edit name</button>
                        </div>
                    )}
                    </div>
                    : <p>Feelings suck!</p>
            }
            <Link to={`/notebooks`}>Add Session</Link>
        </>
    )
}