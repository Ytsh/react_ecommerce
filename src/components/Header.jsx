import { NavLink } from 'react-router-dom';
import '../style/header.css';
import { useSelector } from 'react-redux';


const Header = () =>{
    const state = useSelector((state) => state.handleCart) ;

    return(
        <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/contactus"> Contact Us </NavLink>
            <NavLink className="nav-link" to="/aboutus"> About Us </NavLink>
            <NavLink className="nav-link" to="/cart"> <i class="bi bi-cart"/>  </NavLink>
        </div>
    </div>
    )
}

export default Header;