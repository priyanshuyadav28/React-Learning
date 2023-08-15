import './EditProfile.css';

function EditProfile() {
    return(<div className='right-card'>
        <div className='heading'>Edit Profile</div>

        <div className='personal-info'>
            <div className='personal'>Personal Information</div>

            <div className='name-section'>
                <label className='name'>Name</label>
                <input className='type-here' placeholder='Type Here'></input> <br></br>
            </div>
            
            <div className='male-female'>
                <label className='gender'>Gender</label>

            <div className='male-check'> 
                <input className='checkbox-round' 
                type='radio'></input>
                <label className='male'>Male</label>
            </div>
            
            <div className='female-check'>
                <input className='checkbox-round' type='radio'></input>
                <label className='female'>Female</label>
            </div>

        </div>
               
    </div>

    <div className='contact-details'>
        <div>Contact Details</div>
        
        <div className='email'>
            <label className='email-heading'>Email</label>
            <input className='email-input' placeholder='Type Here'></input>
        </div>
        
        <div className='phone-number'>
            <label>Phone Number</label>
            <input className='phone-no-input' placeholder='Type Here'></input>
        </div>
        


    </div>

    <div className='address'>
        <div>Address</div>

        <div className='locality-div'>
            <label className='locality'>Locality</label>
            <input className='input' placeholder='Type Here'></input>            
        </div>
        
        <div className='city-province-div'>
            <label>City/Province</label>
            <input className='input' placeholder='Type Here'></input>
        </div>
        
        <div className='state-div'>
            <label>State</label>
            <input className='input' placeholder='Type Here'></input>
        </div>
        
        <div className='country-div'>
            <label>Country</label>
            <input className='input' placeholder='Type Here'></input> 
        </div>
        
    </div>

    <div className='btn-div'>
        <buton className='btn'>Save</buton>
    </div>
        
    </div>);
}   

export default EditProfile;