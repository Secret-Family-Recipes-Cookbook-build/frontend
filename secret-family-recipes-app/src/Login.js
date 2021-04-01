import axios from 'axios';
import { useHistory } from "react-router";
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const initialValues = {
    username: "",
    password: ""
};

function Login() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChanges = e => {
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://reqres.in/api/users", formValues)
        .then((res) =>{
                window.localStorage.setItem('token', res.data.payload);
                // push('/restapiroutehere');
        })
        .catch((err) => console.log(err.message));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            id='username'
            name='username'
            value={formValues.username} 
            onChange={handleChanges}
            />
            <label hmtlFor="password">Password</label>
            <input 
            id='password'
            name='password'
            type='password'
            value={formValues.password}
            onChange={handleChanges}
            />
            <Button
                href='/main'
                size='large'
                variant='contained'
                color='primary'>
                Log In
            </Button>
        </form>
    )
}

export default Login
