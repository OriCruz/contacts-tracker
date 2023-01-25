import {useEffect, useState} from 'react';
import{getContact, deleteContact} from '../services/contacts-api';
import {useParams, useNavigate} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '../css/contact.css';

function Contact(){
  const nav = useNavigate();//setting up our return to main page
  const {id}=useParams();
  const [contact, setContact]= useState({});

  useEffect(()=>{
    getContact(id)
    .then(res=>setContact(res.data))
  }, []);

  const deleteTheContact = ()=>{
    deleteContact(id).then(()=>{
      nav('/');
    })
    
  }
  
  return(
    <div className='container is-fluid'>
      <div className='card'>
        <img className='card-image' src={contact.img}/>
        <div className='card-content'>
            <h1 >First Name: {contact.firstName}</h1>
            <h2 >Last Name: {contact.lastName}</h2>
            <h4 className='phone'> Phone: {contact.phoneNumber}</h4>
        </div>
        <div className='card-footer'>
          <div className='card-footer-item'>
            <button className='button is-warning'onClick={()=>{nav(`/${id}/edit`)}}>edit</button>

          <button className='button is-danger' onClick={deleteTheContact}>delete</button>

          <button className='button is-success' onClick={()=>{nav('/')}}>Main page</button>
          </div>
          
        </div>
        
      </div>
        

    </div>
  )
}

export default Contact;