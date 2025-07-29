import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './page/home';
import { Login } from './page/login';
import { Registration } from './page/registration';
import { Contact } from './page/contact';

function App() {
  return (
    <>
      <Router>
        <div className='min-h-screen bg-gray-50 font-sans'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
