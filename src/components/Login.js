    import { useState } from "react";
    import axios from "axios"; //npm i axios
    import { jwtToken } from "./signals/TokenSignal";


    export function Login() {

        const [ username ,setUsername ] = useState('');
        const [ passw , setPassw ] = useState('');
       

        function login() {
            axios.postForm('http://localhost:3000/login', { username, passw})
            .then(resp => jwtToken.value = resp.data.jwtToken)
            .catch( error => console.log(error.message))
        }

        return (
            <>
            
                 {jwtToken.value.length !== 0 ? <h2> Logged In</h2> :  
            <div>
                    <h2>Log In</h2>
                <label htmlFor="username">Username: </label> <br/>
                <input value={username} onChange={(e => setUsername(e.target.value))} type ="text"/> <br/>

                <label htmlFor="password">Password: </label> <br/>
                <input value={passw} onChange= {e => setPassw(e.target.value)} type="password" /> <br/>
                
                <button onClick={login}> Log In</button>
            </div>
        }
        
        </>
        );
    }