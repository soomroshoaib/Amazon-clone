import React, {useState} from 'react';
import './login.css';
import { Link,useHistory } from 'react-router-dom';
import { auth } from './../../firebase';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const signIn = (e)=> {
    e.preventDefault();
    //firebase sign method
    auth
     .signInWithEmailAndPassword(email, password)
     .then(auth =>{
         history.push('/');
     })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      
    });
    }

    const register = (e) => {
        e.preventDefault();
        //firebase
        auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        if (auth) {
            history.push('/')
        }
    console.log(auth);
    })
    .catch(error => alert(error))
    }
    

    return (
        <div className="login">
            <Link to="/"> 
           <img 
           className="login__logo"
           src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" 
           alt="Amazon-logo" />
            </Link>

            <div className="login__container">
                  <h1>Sign-in</h1>

                  <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                  <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button 
                    type="submit"
                    onClick={signIn}
                    className="login__signInButton"
                    >Sign In
                    </button>
                  <p>
                      By signing-in you agree to Amazon's
                      Conditions of Use & Sale. Please 
                      see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

                  </p>

                  <button 
                  onClick={register}
                  className="login__registerButton"
                  >Create Your Amazon Account</button>
                  </form>
            </div>
        </div>
    )
}

export default Login;
