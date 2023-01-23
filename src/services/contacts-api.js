import axios from 'axios';

const baseURL='http://localhost:3001/contacts'//this is the url where we are getting the information. This is where we connect to our backend

//Show all contacts
export const getContacts=()=>{
    const URL=baseURL;
    const response = axios.get(URL);//grabbing the contacts
    return response;
}
//Show one contact 
export const getContact=(id)=>{
    const URL=`${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
}
//Edit contact
export const editContact=(id, updatedContact)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedContact);
    return response;
}
//Create contact
export const createContact = (contact)=>{
    const URL = baseURL;
    const response = axios.post(URL, contact);
    return response;
}
//Delete contact
export const deleteContact=(id)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
}