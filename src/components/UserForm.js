import React, { Component } from 'react';
import UserDetails from './UserDetails';
import UserPersonalDetails from './UserPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio:''
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step:step + 1
        })
    }

    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch(step) {
            case 1: 
                return (
                    <UserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2: 
                return (
                    <UserPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3: 
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4: 
                return <Success />
        }
        return (
            <div>

            </div>
        )
    }
}

export default UserForm