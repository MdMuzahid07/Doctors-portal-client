import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyAppointments = () => {

    const [appointments, setAppointments] = useState();

    const [user] = useAuthState(auth)

    const navigate = useNavigate();

    
    useEffect(() => {
        if (user) {
            fetch(`https://polar-ridge-14854.herokuapp.com/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(response => {
                    if (response.status === 401 || response.status === 403) {
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                    }

                    return response.json()
                })
                .then(data => {

                    setAppointments(data)
                });
        }
    }, [user])


    return (
        <div>
            <h1>My appointments page: {appointments?.length}</h1>

            <div class="overflow-x-auto my-10">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{a?.patientName}</th>
                                <td>{a?.date}</td>
                                <td>{a?.slot}</td>
                                <td>{a?.treatment}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;