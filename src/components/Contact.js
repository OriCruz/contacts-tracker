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
    deleteContact(id);
    nav('/');
  }
  const formattedPhoneNumber=(number)=>{
    let result =number.replace(/(\d{3})(\d{3})(\d{4})/,'$1-$2-$3');
    return result;
  }
  return(
    <div class='container is-fluid'>
      <div class='card'>
        <img class='card-image' src={contact.img}/>
        <div class='card-content'>
            <h1 >First Name: {contact.firstName}</h1>
            <h2 >Last Name: {contact.lastName}</h2>
            <h4 className='phone'> Phone: {formattedPhoneNumber(contact.phoneNumber)}</h4>
        </div>
        <div class='card-footer'>
          <div class='card-footer-item'>
            <button class='button is-warning'onClick={()=>{nav(`/${id}/edit`)}}>edit</button>

          <button class='button is-danger' onClick={deleteTheContact}>delete</button>

          <button class='button is-success' onClick={()=>{nav('/')}}>Main page</button>
          </div>
          
        </div>
        
      </div>
        

    </div>
  )
}

export default Contact;