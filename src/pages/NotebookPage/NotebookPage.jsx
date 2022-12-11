import {useState, useEffect} from "react";
import Session from "../Session/Session";
import {sessionTypes} from "../../components/emotions"
import {create} from "../../utilities/notebooks-api";

export default function NotebookPage() {
  const [notebook, setNotebook] = useState({
    name: "",
    sessions:[]
    })

  const onClick = function (event) {
    event.preventDefault()
    create(notebook)
  }
 
  return (
    <div>
      <label>Name: </label>
          <input type="text" name="name" value={notebook.name} 
onChange={(e) => setNotebook({ ...notebook, name: e.target.value })}/>
      {sessionTypes.map((session) => (
        <Session
          key={session.name}
          name={session.name}
          notebook={notebook}
          setNotebook={setNotebook} />
      ))}
&nbsp; 
<br></br> 
<br></br>
&nbsp;
<button type="submit" onClick={onClick} >Save</button>
      {notebook.sessions.map((session, key) => (
        <div key={key} >
          <div>{session.name}</div>
        </div>
      ))}
    </div>
  );
}
  
