import { auth, provider } from '../../firebase';
import { Button } from '@material-ui/core'
import React from 'react'
import logo from '../../assets/facebook-logo.svg'
import './Login.css'
import { useStateValue } from '../../contexts/UserContext';
import { actionTypes } from '../../reducers/UserReducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                console.log(state)
            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__logos">
                    <img className="login_logo" src={logo} alt="" />
                    <img src="https://cutt.ly/bh8OVYe" alt="" />
                </div>
                <Button type="submit" className="login__button" onClick={signIn} >Sign In</Button>

            </div>
        </div>
    )
}

export default Login
