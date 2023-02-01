import {useState, useEffect} from "react";
import Session from "../Session/Session";
import {sessionTypes} from "../../components/emotions"
import {create} from "../../utilities/notebooks-api";
import { useNavigate } from "react-router-dom";

export default function NotebookPage() {
  const [notebook, setNotebook] = useState({
    name: "",
    sessions:[]
    })

  const navigate = useNavigate()

  const onClick = function (event) {
    event.preventDefault()
    create(notebook)
    navigate('/')
  }
 
  return (
    <div>
      <h3>Name: </h3>
          <input className="input" type="text" name="name" value={notebook.name} 
onChange={(e) => setNotebook({ ...notebook, name: e.target.value })}/>
<br></br>
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
<button className="savebutton" type="submit" onClick={onClick} >Save</button>
&nbsp;
      {notebook.sessions.map((session, key) => (
        <div key={key} >
          <div>{session.name}</div>
        </div>
      ))}
    </div>
  );
}


  
