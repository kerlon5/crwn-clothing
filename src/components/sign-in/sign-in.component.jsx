import React, {Component} from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email: '', password: ''})
        }
        catch(e){
            console.error(e)
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        label="email" 
                        value={this.state.email}
                        handleChange = {this.handleChange} 
                        required />
                    <FormInput 
                        name="password"
                        type="password" 
                        label="password"
                        value={this.state.password} 
                        handleChange = {this.handleChange}
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn