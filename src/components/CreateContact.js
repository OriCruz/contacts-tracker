import {useNavigate} from 'react-router-dom';
import {createContact} from '../services/contacts-api';

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
        <div>
            <h4>Create a Contact</h4>
            <form onSubmit={createTheContact}>
                First name:
                <input type='text' name='firstName' id='dsc'/>
                Last name:
                <input type='text' name='lastName' id='dsc'/>
                Phone number:
                <input type='text' name='phoneNumber' id='dsc'/>
                Photo:
                <input type='text' name='img' id='dsc'/>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default Create;