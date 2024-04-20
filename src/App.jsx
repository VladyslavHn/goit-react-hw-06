import ContactForm from "./components/contactForm/contactForm"
import ContactList from "./components/contactList/contactList"
import SearchBox from "./components/searchBox/searchBox"
import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import './App.css'


const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    if (!stringifiedContacts) return initialContacts;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  })

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const [filter, setFilter] = useState('')

  const addContact = (newContact) => {
    const add = {
      ...newContact,
      id: nanoid(), 
    };
    setContacts((prevState) => [...prevState, add]);
  }

  const deleteContact = (nameId) => {
    setContacts(prevState => prevState.filter(name => name.id !== nameId))
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App
