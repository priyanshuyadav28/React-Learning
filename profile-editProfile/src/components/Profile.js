import './Profile.css';

function Profile() {
    return(<div className='left-card'>

        <div className='hello-maya'>
            <img className='pic'></img>
            <span className='name'>Hello Maya</span>
        </div>

        <div className='links'>
            <div className='items'>Profile</div>
            <div className='items'>Orders</div>
            <div className='items'>Cart</div>
            <div className='items'>Payments</div>
            <div className='items'>Notification</div>
            <div className='items'>Privacy</div>
            <div className='items'>Settings</div>
            <div className='items'>Log Out</div>
        </div>

    </div>);
}

export default Profile;