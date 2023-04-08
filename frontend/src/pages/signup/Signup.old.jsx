import React, { Component } from "react"
import "./Signup.css"
import { getApiUrl } from "../../lib/getApiUrl";





export default class Signup extends Component {



    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    };



    handleSubmit(e) {
        e.preventDefault();
        const { name, email, password } = this.state;
        console.log(name, email, password);
        fetch(`${getApiUrl()}/signup`, {
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
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            this.props.history.push("/verified");
          });




    }




    render() {

        // const [goToVerified, setGoToVerified] = React.useState(false)

        // if (goToVerified) {
        //     return <Navigate to="/verified" />
        // }

        // function nextPage() {


        //     return (
        //         <Navigate to="/verified" />
        //     )
        // };

        return (

            <div className="signup-container">
                <div className="signup-block-blue">
                    <p className="signup-text-header">Welcome</p>
                    <div className="signup-block-white">
                        <form onSubmit={this.handleSubmit}>
                            <br></br>
                            <p className="signup-text-name-1">Name</p>
                            <input className="signup-bar-1" type="text" placeholder="" required
                                onChange={e => this.setState({ name: e.target.value })}></input>

                            <p className="signup-text-name-2">Email</p>
                            <input type="email" className="signup-bar-2" required
                                onChange={e => this.setState({ email: e.target.value })}></input>

                            <p className="signup-text-name-3">Password</p>
                            <input type="password" className="signup-bar-3" required
                                onChange={e => this.setState({ password: e.target.value })}></input>

                            <button style={{ cursor: "pointer" }} type="submit" className="signup-bar-main">Sign Up</button >
                            {/* <button style={{ cursor: "pointer" }} type="submit" className="signup-bar-main">Sign Up</button > */}
                        </form>

                        <div className="signup-line"></div>
                        <div className="signup-or-box">OR</div>
                        <div className="social-links-signup">
                            <a href="/verified"><img className="social fb" src="../assets/facebook.png" alt="login via facebook"></img></a>
                            <a href="/verified"><img className="social twitter" src="../assets/twitter.png" alt="login via twitter"></img></a>
                            <a href="/verified"><img className="social insta" src="../assets/instagram.png" alt="login via instagram"></img></a>
                        </div>
                        <p className="signup-already-user">Already a User? <a href="/login">LOGIN</a></p>
                    </div>
                </div>
            </div >
        )
    }

}


