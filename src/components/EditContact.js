import {getContact, editContact} from '../services/contacts-api';
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import 'bulma/css/bulma.min.css';

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
        editContact(id, updatedContact);
        nav(`/${id}`);
    }
    return(
        <div>
            <form onSubmit={editTheContact}>
                First name:<input type='text' name='firstName'defaultValue={data.firstName}></input>
                Last name:<input type='text' name='lastName'defaultValue={data.lastName}></input>
                Phone number:<input type='text' name='phoneNumber'defaultValue={data.phoneNumber}></input>
                Photo:<input type='text' name='img'defaultValue={data.img}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default EditContact;