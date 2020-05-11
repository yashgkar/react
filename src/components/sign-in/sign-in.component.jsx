import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            //cursor: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    /*boxClick = (e) => {
        this.setState({
            cursor: 'none'
        })
    }*/

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        onChange={this.handleChange}
                        type='email'
                        value={this.state.email}
                        label='Email'
                        //style={{ cursor: this.state.cursor }}
                       //onClick={this.boxClick}
                        required
                    />
                    <FormInput name='password'
                        onChange={this.handleChange}
                        type='password'
                        value={this.state.password}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;