import { NavLink } from 'react-router-dom'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUsPage">AboutUs</NavLink>
            </li>
            <li>
              <NavLink to="/ContactUsPage">Contact Us</NavLink>
            </li>
            {/* <li>
              <NavLink to="/CookiesPolicyPage">Our Policies</NavLink>
            </li> */}
            <li>
              <NavLink to="/OurSubjectsPage">Subjects</NavLink>
            </li>
            <li>
              <NavLink to="/OurTutorsPage">Tutors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar