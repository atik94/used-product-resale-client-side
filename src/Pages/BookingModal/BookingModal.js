import React from "react";

const BookingModal = ({ orders, setOrders }) => {
  const { name, resalePrice } = orders;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const booking = {
      orders: name,
      buyer: userName,
      email,
      phone,
      location,
    };
    console.log(booking);
    setOrders(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4">Resale price {resalePrice}</p>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-3">
            <input name="name" type="text" placeholder="your name" className="input w-full input-bordered" />
            <input name="email" type="email" placeholder="your email" className="input w-full input-bordered" />
            <input name="phone" type="text" placeholder="your phone" className="input w-full input-bordered" />
            <input name="location" type="text" placeholder="your location" className="input w-full input-bordered" />
            <br />
            <input type="submit" value="Submit" className="btn btn-accent w-full input-bordered" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
