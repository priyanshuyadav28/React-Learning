import './Appointment.css';


function Appointment() {
    const search = <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.2756 21C41.2756 32.0564 32.416 41 21.5109 41C10.6058 41 1.74622 32.0564 1.74622 21C1.74622 9.94365 10.6058 1 21.5109 1C32.416 1 41.2756 9.94365 41.2756 21Z" stroke="#222F66" stroke-width="2"/>
    </svg>
        
    return(
        <div className="appointment">

        <div className='btn-hosp-name'>
            <button className='button'></button>
            <span className='hospital-name'>BIRLA SARVAJANIK HOSPITAL</span>
        </div>
       

        <div className='call-book-appointment'>
            <div className='search-icon'></div>
        
                <div className='phone-icon'></div>
                <div>022-6757-0111</div>

                {/* <div className='icon'>icon</div> */}
               <div className='date-choose'>
                <span></span>
                <span>Book An Appointment</span>
               </div>

        </div>
        
    </div>);
}

export default Appointment;