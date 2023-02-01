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
                        <p key={session._id}>
                            <p>{session.name}</p>
                        </p>)}
                    </p>
                    : <p>No emotions today</p>
            }
        </>
    )
}

