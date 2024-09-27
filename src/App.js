import './App.css';
// import ReactDOM from 'react/client';
import Nav from './components/nav/nav'
import First from './components/first_div/first'
import About_us from './components/about_us/about_us';
import Footer from './components/footer/footer';
import Patient from './components/patient/patient';
import { createBrowserRouter,Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <div className='main_div'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Nav/>,<First/></div>}/>
          <Route path='contact_us' element={<div><Nav/><Footer/></div>}/>
          <Route path='patient' element={<div><Nav/><Patient/></div>}/>
          <Route path='about' element={<div><Nav/><About_us/></div>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
