import {useState} from "react";


export function  Register()  {
    const [ fname, setFname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ username, setUsername] = useState('');
    const [ pass, setPass ] = useState('');
    const [ email, setEmail ] = useState('');


    const handleSubmit= (e) => {
        e.preventDefault();
        
    }

    return (

        <div>
            
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First name</label> <br/>
                <input value={fname} name="fname" onChange={(e) => setFname(e.target.value)} id="fname" placeholder="Mikko" type="text"/><br/>

                <label htmlFor="lastname">Last name</label><br/>
                <input value={lastname} name="lastname" onChange={(e) => setLastname(e.target.value)} id="lastname" placeholder="Mallikas" type="text"/><br/>

                <label htmlFor="username">Username </label><br/>
                <input value={username} name="username" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Mallikas" type="text"/><br/>

                <label htmlFor="pass">Password</label><br/>
                <input value={pass} name="pass" onChange={(e) => setPass(e.target.value)} id="pass" type="password" placeholder="**************"/><br/>

                <label htmlFor="email">Email</label><br/>
                <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="youremail@gmail.com" type="email"/><br/>

                <button onClick={Register}>Register</button>
            </form>
            <button >Already have an account? Log in here.</button>
        
        </div>
    )
}