import {useNavigate} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '../css/navbar.css'

function Navbar() {
    const nav = useNavigate();
  return (
    <nav className='navbar is-spaced' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand '>
            <h1 className='title'>Contact-Tracker</h1>
        <span className='nav-item'>
            <a className='subtitle' onClick={()=>{nav('/')}}> Home</a> 
        </span>
        <span className='nav-item'>
            <a className='subtitle' onClick={()=>{nav('/create-contact')}}> New Contact</a>
        </span> 
       </div> 
       
    </nav>
  );
}

export default Navbar;
