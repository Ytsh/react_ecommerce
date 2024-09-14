import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Test from './Test';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'; 
import Cart from './pages/Cart'; 
import Header from './components/Header';
import Footer from './components/Footer';
import store from './redux/store';
import { Provider } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 

    <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/aboutus" element={ <AboutUs/> } />
        <Route path="/contactus" element={ < ContactUs /> } />
        <Route path="/cart" element={ < Cart /> } />
        <Route path="/test" element={ <Test/> } />
      
      </Routes>
      <Footer />

    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
