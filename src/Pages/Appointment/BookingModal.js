import React from 'react';

const BookingModal = ({ treatment }) => {
    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form className='grid grid-cols-1 gap-3'>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;