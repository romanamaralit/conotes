import {useState} from 'react';

export default function Session ({name,notebook,setNotebook}) {
    const [session, setSession] = useState({name: name})
    const onClick = function (event) {
        event.preventDefault()
        setNotebook({...notebook, sessions: [session, ...notebook.sessions]})
    }
    return (
        <>
            &nbsp; 
<br></br> 
<br></br>
&nbsp;
            {name}
            <form onSubmit={onClick}>
                <button type="submit">Add</button>
            </form>
        </>
    )
}