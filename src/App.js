import './App.css';
import 'bulma/css/bulma.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Contacts/>}/>
          <Route path='/:id' element={<Contact/>}/>
          <Route path='/:id/edit' element={<EditContact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
