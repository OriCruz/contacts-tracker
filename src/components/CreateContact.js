import {useNavigate} from 'react-router-dom';
import {createContact} from '../services/contacts-api';
import 'bulma/css/bulma.min.css';
import '../css/editContact.css'

function Create() {
    const nav = useNavigate();

    const createTheContact = (e)=>{
        const contact = {firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        phoneNumber:e.target.phoneNumber.value,
        img:e.target.img.value}

        createContact(contact);
          nav('/');  
       
        
    }
    return (
        <div className='container is-fluid'>
            <h1 className='title'>Create a Contact</h1>
            <form className='form' onSubmit={createTheContact}>
                <div className='field'>
                   <label className='label'>First name:</label> 
                <input className='input' type='text' name='firstName' id='dsc'/>
                </div>
                <div className='field'>
                <label className='label'>Last name:</label>
                <input className='input' type='text' name='lastName' id='dsc'/>
                </div>
                <div className='field'>
                   <label className='label'>Phone number: </label>
                <input className='input' type='text' name='phoneNumber' id='dsc'/>  
                </div>
               <div className='field'>
                <label className='label'>Photo:</label>
                <input className='input' type='text' name='img' id='dsc'/>
               </div>
                <input className='button is-primary' type='submit'/>
            </form>
        </div>
    );
}

export default Create;