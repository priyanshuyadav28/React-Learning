
import './Logo.css';

function Logo() {
    return(<div className='navbar'>
        <div className='logo-box'>Logo</div>

        <div className='right-nav'>
        <input className='input-field' placeholder='Search'></input>
            <div>Heart</div>
            <div>Cart</div>
            <div>Profile</div>
        </div>
    </div>);
}

export default Logo;