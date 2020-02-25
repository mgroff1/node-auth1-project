import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterForm = props => {
    const [user, setUser] = useState({username: '', password: ''});
    const history = useHistory();

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const register = user => {
        axios
            .post('http://localhost:5000/api/auth/register', user)
            .then(res => {
                console.log(res.data, user)
                setUser(user)
                window.location.href = '/login'
            })
    }

    return (
        <div className='registerForm'>
            <h2>Register a New User</h2>
            <Form onSubmit={register}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                     required
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Enter Username"
                     value={user.username}
                     onChange={handleChange}
                     />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                     required
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Enter Password"
                     value={user.password}
                     onChange={handleChange}
                     />
                </FormGroup>
                <Button color='info'>Register</Button>
            </Form>
        </div>
    )
}

export default RegisterForm;