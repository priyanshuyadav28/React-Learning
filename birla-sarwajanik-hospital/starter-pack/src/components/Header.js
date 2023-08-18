import './Header.css';
import facebook from './assets/Vector.jpg';
import twitter from './assets/Vector (1).jpg';
import linkedin from './assets/Vector (2).jpg';
import calender from './assets/Vector (3).jpg';
import call from './assets/Vector (4).jpg';
import instagram from './assets/Vector (5).jpg';
import search from './assets/Search.jpg';

function Header() {
    
    return(<div className='header'>
        <div className='left-part'>
            <a className='left-part-text'>About Us | </a>
            <a className='left-part-text'>News & Media | </a>
            <a className='left-part-text'>Academics | </a>
            <a className='left-part-text'>Careers | </a>
            <a className='left-part-text'>Contact</a>
        </div>

        <div className='right-part'>
            <span className='right-part-text'>Follow us on: </span>
            <span id='fb' className='social-icon'>
                <img src={facebook}></img>
            </span>
            <span id='twitter' className='social-icon'>
                <img src={twitter}></img>
            </span>
            <span id='insta' className='social-icon'>
            <img src={instagram}></img>
            </span>
            <span id='linkedin' className='social-icon'>
            <img src={linkedin}></img>
            </span>
        </div>

    </div>);
}

export default Header;