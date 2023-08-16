import './Body.css';
import Profile from './Profile';
import EditProfile from './EditProfile';

function Body() {
    return(<div className='body'>  
        <Profile></Profile>
        <EditProfile></EditProfile>
    </div>);
};

export default Body;