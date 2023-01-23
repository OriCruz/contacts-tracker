import {getContacts} from '../services/contacts-api';
import {useState, useEffect} from 'react';
import Create from './CreateContact';

function Contacts(){
    const [contacts, setContacts]=useState([]);

    useEffect(()=>{
        getContacts()
        .then(res=>setContacts(res.data))
    }, []);

    return(
        <div className='contacts'>
            <h1> List of contacts:</h1>
            <Create/>

            <ul className='list'>
                {contacts.map((contact)=>{
                    return(
                        <li>
                            <a href={`${contact._id}`} ><h3>{contact.firstName}</h3></a>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default Contacts;