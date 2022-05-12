import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ExceptionalDental = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat voluptatibus molestias! Dicta cumque architecto repellat accusantium officia, quam adipisci praesentium velit rerum temporibus magnam, delectus maxime asperiores, natus totam dolorem tempore nulla ex accusamus eveniet sequi commodi? Incidunt repellat assumenda qui porro voluptatum ullam aliquam ab et id placeat!</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;