import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import { getApiUrl } from "../../lib/getApiUrl";



function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, password);
        const res = await fetch(`${getApiUrl()}/signup`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        const data = await res.json()
        console.log(data, "userRegister");
        // this.props.history.push('/verified');
        return navigate('/musicapp')
    }

    return (
        <div className="signup-container">
            <div className="signup-block-blue">
                <p className="signup-text-header">Welcome</p>
                <div className="signup-block-white">
                    <form onSubmit={handleSubmit}>
                        <br></br>
                        <p className="signup-text-name-1">Name</p>
                        <input
                            className="signup-bar-1"
                            type="text"
                            placeholder=""
                            required
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />

                        <p className="signup-text-name-2">Email</p>
                        <input
                            type="email"
                            className="signup-bar-2"
                            required
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />

                        <p className="signup-text-name-3">Password</p>
                        <input
                            type="password"
                            className="signup-bar-3"
                            required
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />

                        <button style={{ cursor: "pointer" }} type="submit" className="signup-bar-main">Sign Up</button >
                        {/* <button style={{ cursor: "pointer" }} type="submit" className="signup-bar-main">Sign Up</button > */}
                    </form>
                    <div className="verified-logo">
                        <p className="verified-text-logo">9TS</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { Signup }
export default Signup
