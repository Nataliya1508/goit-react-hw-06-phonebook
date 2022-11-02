
import ContactForm from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export default function App() {
 
  return (
 <>
        <ContactForm
          // onAddContact={handleAddContact}
        />
      <Filter /> 
      {/* <Filter changeFilter={changeFilter} />  */}
      <ContactList
        
          // contacts={onFilter()}
          // onRemove={handleremoveContact}
        >
         {/* <Filter value={filter} onChange={handleFilterChange} />  */}
      </ContactList>  
      
      </>
  )
  
}
  


