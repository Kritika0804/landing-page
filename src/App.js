import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/NavbarComp'
import './Components/Main'
import '../src/Style/main.css'
import './Components/Navbar'
import './Style/main2.css'

// import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/NavbarComp';
import Main from './Components/Main';
import Feature from './Components/Feature';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      {/* <Feature/>
      <Feature/>
      <Feature/>
      <Feature/> */}
    </>
  );
}

export default App;
