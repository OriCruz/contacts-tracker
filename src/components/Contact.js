import {useEffect, useState} from 'react';
import{getContact, deleteContact} from '../services/contacts-api';
import {useParams, useNavigate} from 'react-router-dom';

function Contact(){
  const nav = useNavigate();//setting up our return to main page
  const {id}=useParams();
  const [contact, setContact]= useState({});

  useEffect(()=>{
    getContact(id)
    .then(res=>setContact(res.data))
  }, []);

  const deleteTheContact = ()=>{
    deleteContact(id);
    nav('/');
  }
  return(
    <div className='contact'>
        <h2>{contact.firstName}</h2>
        <h3>{contact.lastName}</h3>
        <img src={contact.img}/>
        <h4>{contact.phoneNumber}</h4>
        
        <button onClick={()=>{nav(`/${id}/edit`)}}>edit</button>
        <button onClick={deleteTheContact}>delete</button>
        <button onClick={()=>{nav('/')}}>return to main</button>

    </div>
  )
}

export default Contact;