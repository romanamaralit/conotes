import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {show} from "../../utilities/notebooks-api";

export default function NotebookDetailsPage() {
    let {notebookId} = useParams()
    const [notebook, setNotebook] = useState()

    useEffect(() => {
        async function fetchNotebookAndUpdateState() {
            const response = await show(notebookId)
            setNotebook(response)
        }
        fetchNotebookAndUpdateState()
    }, [notebookId])
    return (
        <>
            {
                notebook ?
                    <p>{notebook.sessions.map(session =>
                        <ul key={session._id}>
                            <li>{session.name}</li>
                        </ul>)}
                    </p>
                    : <p>No emotions today</p>
            }
        </>
    )
}