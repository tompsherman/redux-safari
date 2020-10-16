import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth'


const Login = (props) => {
    // How can we log in? What do we need to do?

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        
    }


    return (
        <div>
            <h1 className="adventure">Lets go Safari</h1>
            <form onSubmit={handleSubmit}>
                <input 
                name="username" 
                type="text" 
                value={props.username} 
                onChange={handleChange} 
                placeholder="enter username" 
                />

                <input 
                name="password" 
                type="password" 
                value={props.password} 
                onChange={handleChange} 
                placeholder="enter password" 
                />
                <button>See that Tiger!</button>
            </form>
        </div>
    )
}

export default Login