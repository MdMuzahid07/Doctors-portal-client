import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState();

    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(response => response.json())
                .then(data => setAppointments(data))
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