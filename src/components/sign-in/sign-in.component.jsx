import React from 'react';
import FormInput from '../forn-input-component/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    handleChange = event =>{
        const { value,name } = event.target;

        this.setState({[name]:value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        label='email' 
                        value={this.state.email} required
                            
                        />
                    
                    <FormInput 
                        name="password" 
                        handleChange={this.handleChange} 
                        type="password"
                        label='Password' 
                        value={this.state.email} required

                        />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;