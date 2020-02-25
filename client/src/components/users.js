import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const Users = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        AxiosWithAuth()
        .get('/users')
        .then(res => {
            console.log(res.data)
        })
    }, [])

    return (
        <div className='userList'>

        </div>
    )
}

export default Users;