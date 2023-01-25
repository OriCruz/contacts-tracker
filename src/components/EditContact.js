import {getContact, editContact} from '../services/contacts-api';
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '../css/editContact.css'

const EditContact = ()=>{
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});//information passed thru object

    useEffect(()=>{
        getContact(id)
        .then(res=>setData(res.data))
    }, []);

    const editTheContact=e=>{
        e.preventDefault();
        const updatedContact={firstName:e.target.firstName.value, lastName:e.target.lastName.value, phoneNumber:e.target.phoneNumber.value, img:e.target.img.value}
        editContact(id, updatedContact).then(()=>{
             nav(`/${id}`);
        })
       
    }
    return(
        <div className='container is-fluid'>
            <h1 className='title'>Edit {data.firstName}'s contact</h1>
            <form className='form' onSubmit={editTheContact}>
                <div className='field'>
                    <label className='label'>First name:</label> 
                        <input className='input' type='text' name='firstName'defaultValue={data.firstName}/>
                </div>
                <div className='field'>
                    <label className='label'>Last name:</label>
                    <input className='input' type='text' name='lastName'defaultValue={data.lastName}/>
                </div>
                <div className='field'>
                   <label className='label'>Phone number:</label> 
                   <input className='input' type='text' name='phoneNumber'defaultValue={data.phoneNumber}/>
                </div>
                <div className='field'> 
                   <label className='label'>Photo:</label>
                   <input className='input' type='text' name='img'defaultValue={data.img}></input> 
                </div>
                <input className='button is-success' type='submit'/>
            </form>
        </div>
    )
}
export default EditContact;