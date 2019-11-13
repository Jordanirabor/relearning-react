import React from 'react'
import './sign-in.styles.scss'

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

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }

    render() {

        return (
            <div class="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={this.state.email} required onChange={this.handleChange} />
                    <label>Email</label>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} required onChange={this.handleChange} />
                    <label>Email</label>
                    <input type="submit" placeholder="Submit" />
                </form>
            </div>
        )

    }
}


