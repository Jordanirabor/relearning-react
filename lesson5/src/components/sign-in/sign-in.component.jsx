import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', passoword: ' ' })
        } catch (error) {
            console.error(error)
        }

        this.setState({ email: '', password: '' })
    }

    render() {

        return (
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} label="Email" required handleChange={this.handleChange} />
                    <FormInput type="password" name="password" value={this.state.password} label="Password" required handleChange={this.handleChange} />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton otherClassName="sign-in-with-google" onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </form>
            </div>
        )

    }
}


