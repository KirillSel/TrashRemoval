import OrderModal from './components/modal/OrderModal';
import './App.css';
import About from './components/pages/About';
import Containers from './components/pages/Containers';
import Footer from './components/pages/Footer';
import Navbar from './components/nav/Navbar';
import NavProvider from './components/NavContext';
import Reviews from './components/pages/Reviews';
import PersonalDetails from './components/pages/PersonalDetails';

function App() {
  return (
    
      <div className="bg-gray-100">
        <NavProvider> 
          <Navbar/>
          <About/>
          <Containers/>
          <Reviews/>
          <PersonalDetails/>
          <Footer/>
          
        </NavProvider>
      </div>
    
    
  );
}

export default App;
