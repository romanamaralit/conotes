import {useState} from 'react';

export default function Session ({name,notebook,setNotebook}) {
    const [session, setSession] = useState({name: name})
    const onClick = function (event) {
        event.preventDefault()
        setNotebook({...notebook, sessions: [session, ...notebook.sessions]})
    }
    return (
        <>
        <div className="sessions">
<br></br>
            {name}
            <form onSubmit={onClick}>
                <button type="submit">Add</button>
            </form>
        </div>
        </>
    )
}


