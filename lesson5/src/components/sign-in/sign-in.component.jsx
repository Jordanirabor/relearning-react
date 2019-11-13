import React from 'react'
import './sign-in.styles.scss'

export default class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit() {
        this.setState({ name: '', password: '' })
    }

    render() {

        return (
            <div class="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password </span>

                <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                <label>Email</label>
                <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                <label>Email</label>
                <input type="submit" placeholder="Submir" onChange={this.handleSubmit} />
            </div>
        )

    }
}


