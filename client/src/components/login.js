import React, {useState} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = props => {
    const [user, setUser] = useState({username: '', password: ''});

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const login = user => {
        axios
            .post('http://localhost:5000/api/auth/login', user)
            .then(res => {
                console.log(res.data, user)
                setUser(user)
                window.location.href = '/users'
            })
    }
    return (
        <div className='registerForm'>
            <h2>Log In</h2>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                     required
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Enter Username"
                     value={user.username}
                     onChange={handleChange} />
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
                     onChange={handleChange} />
                </FormGroup>
                <Button color='info'>Log In</Button>
            </Form>
        </div>
    )
}

export default LoginForm;