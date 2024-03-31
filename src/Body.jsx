import React, { useState } from 'react';
import './Style/Body.css';

function Body() {
    const [service, setService] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    const handleServiceSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log(`Searching for service: ${service}`);
    };

    const handleAppointmentBooking = (e) => {
        e.preventDefault();
        // Implement appointment booking functionality here
        console.log(`Booking appointment on ${appointmentDate} at ${appointmentTime}`);
    };

    return (
        <>
            <div className="body-container">
                {/* Existing sections */}
                {/* ... */}

                {/* Enhanced Section: Schedule an Appointment */}
                <div className="section">
                    <h3>Schedule an Appointment</h3>
                    <form onSubmit={handleAppointmentBooking}>
                        <label htmlFor="appointmentDate">Choose a date:</label>
                        <input
                            type="date"
                            id="appointmentDate"
                            name="appointmentDate"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            required
                        />
                        <label htmlFor="appointmentTime">Choose a time:</label>
                        <input
                            type="time"
                            id="appointmentTime"
                            name="appointmentTime"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            required
                        />
                        <button type="submit">Book Appointment</button>
                    </form>
                </div>

                {/* Enhanced Section: Search for Services */}
                <div className="section">
                    <h3>Search for Services</h3>
                    <form onSubmit={handleServiceSearch}>
                        <input
                            type="text"
                            placeholder="Enter a service..."
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            required
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Body;


// // Body.js
// import React, { useState } from 'react';
// import './Body.css';

// function Body() {
//     const [service, setService] = useState('');
//     const [appointmentDate, setAppointmentDate] = useState('');
//     const [appointmentTime, setAppointmentTime] = useState('');

//     const handleServiceSearch = (e) => {
//         e.preventDefault();
//         // Implement search functionality here
//         console.log(`Searching for service: ${service}`);
//     };

//     const handleAppointmentBooking = (e) => {
//         e.preventDefault();
//         // Implement appointment booking functionality here
//         console.log(`Booking appointment on ${appointmentDate} at ${appointmentTime}`);
//     };

//     return (
//         <>
//             <div className="body-container">
//                 {/* Existing sections */}
//                 {/* ... */}

//                 {/* Enhanced Section: Schedule an Appointment */}
//                 <div className="section">
//                     <h3>Schedule an Appointment</h3>
//                     <form onSubmit={handleAppointmentBooking}>
//                         <label htmlFor="appointmentDate">Choose a date:</label>
//                         <input
//                             type="date"
//                             id="appointmentDate"
//                             name="appointmentDate"
//                             value={appointmentDate}
//                             onChange={(e) => setAppointmentDate(e.target.value)}
//                             required
//                         />
//                         <label htmlFor="appointmentTime">Choose a time:</label>
//                         <input
//                             type="time"
//                             id="appointmentTime"
//                             name="appointmentTime"
//                             value={appointmentTime}
//                             onChange={(e) => setAppointmentTime(e.target.value)}
//                             required
//                         />
//                         <button type="submit">Book Appointment</button>
//                     </form>
//                 </div>

//                 {/* Enhanced Section: Search for Services */}
//                 <div className="section">
//                     <h3>Search for Services</h3>
//                     <form onSubmit={handleServiceSearch}>
//                         <input
//                             type="text"
//                             placeholder="Enter a service..."
//                             value={service}
//                             onChange={(e) => setService(e.target.value)}
//                             required
//                         />
//                         <button type="submit">Search</button>
//                     </form>
//                 </div>

//             </div>
//         </>
//     );
// }

// export default Body;




{/* <div className="body-container">
            <div className="section">
                <h2>General Operation of the Clinic</h2>
                <p>
                Our clinic operates from Monday to Friday, from 9:00 AM to 5:00 PM.
                We offer a range of medical services including consultations, examinations, and treatments.
                Our team of experienced healthcare professionals is dedicated to providing high-quality care to all our patients.
                </p>
            </div>
            <div className="section">
                <h3>Services Provided</h3>
                <ul>
                <li>Consultations with experienced doctors</li>
                <li>Examinations and diagnostic tests</li>
                <li>Follow-up immunization vaccinations</li>
                <li>General surgery and minor procedures</li>
                <li>Emergency services</li>
                <li>Specialized treatments and therapies</li>
                <li>Health education and counseling</li>
                </ul>
            </div>
            <div className="section">
                <h3>Appointments and Inquiries</h3>
                <p>
                For appointments and inquiries, please contact us during our operating hours.
                We also offer emergency services outside of regular hours.
                </p>
            </div>
    </div> */}