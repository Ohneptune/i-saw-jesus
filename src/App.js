
import './App.css';
import {Button, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import React from "react"






function App() {
  const navigate = useNavigate ();

  return (
    <div className="App">
     <h1> LOGIN FOR JESUS</h1>
     <Form.Group>
                    <Form.Control
                    name=""
                    placeholder="USERNAME"
                    style={{ marginBottom: "1rem"}}
                   
                    />
                    <Form.Control
                    name=""
                    placeholder="PASSWORD"
                    style={{marginBottom: "1rem"}}
                    
                    />
                </Form.Group>
     <Button onClick={() => navigate("create")}> JESUS</Button>
    </div>
  );
}

export default App;
