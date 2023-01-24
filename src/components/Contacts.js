import {getContacts} from '../services/contacts-api';
import {useState, useEffect} from 'react';
import 'bulma/css/bulma.min.css';
import '../css/conctacts.css'
import {Link} from 'react-router-dom';

function Contacts(){
    const [contacts, setContacts]=useState([]);

    useEffect(()=>{
        getContacts()
        .then(res=>setContacts(res.data))
    }, []);

    return(
        <div className='contacts'>
            <h1 className='title'>List of contacts:</h1>

            <ul className='list'>
                {contacts.map((contact)=>{
                    return(
                        <li>
                            <div className='contact-container'>
                                <img className='contact-pic'  src={contact.img}/>
                                <Link href={`${contact._id}`} ><h3 className='contact-name'>{contact.firstName}</h3></Link>
                            </div>
                            
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default Contacts;