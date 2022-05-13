import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-xl font-bold text-primary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ?
                                <span>{slots[0]}</span>
                                :
                                <span className='text-red-500'>No slot Available</span>

                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                        <label for="booking-modal"
                            disabled={slots.length === 0} className="btn btn-sm btn-primary text-white uppercase"
                            onClick={() => setTreatment(service)}
                            className="btn modal-button text-white btn btn-primary uppercase">BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;