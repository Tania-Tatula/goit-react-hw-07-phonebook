import axios from 'axios';

axios.default.base = 'http://localhost:4040';

const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
}

const submitContact = contact =>{
    return axios.post('/contacts', contact).then(({data}) => data);
}

const deleteContact = contactId =>{
    return axios.delete(`/contacts/${contactId}`);
}

export default {fetchContacts, submitContact, deleteContact};