import {Button, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'



function NotebookPage () {
    const navigate = useNavigate()
    const [client, setClient] = useState({
        name: "",
        city:"",
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setClient(prev => {
            return{
                ...prev,
                [name]: value,
            }
            })
        }

    useEffect(() => {
        console.log(client);
    }, [client])
    
    const handleClick = (event) => {
        event.preventDefault();
    }


    return (
        <>
        <h1>NotebookPage</h1>
        <Form>
            <Form.Group>
                <Form.Control name='name' value= {client.name} placeholder="Name" onChange={handleChange}/>
                <Form.Control name='city' value= {client.city} placeholder="City" onChange={handleChange}/>
                <Button onClick={handleClick}>Add Client</Button>
            </Form.Group>
        </Form>
        <br></br>
        <Button onClick={() => navigate(-1) }>Home</Button>
        </>
    )
}

export default NotebookPage
  