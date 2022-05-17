import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';



const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);


    const formattedDate = format(date, 'PP');


    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://polar-ridge-14854.herokuapp.com/available?date=${formattedDate}`).then(response => response.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-xl text-center text-primary mb-10 mt-28'>Available Appointments on{format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28'>
                {
                    services?.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        >

                        </Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;