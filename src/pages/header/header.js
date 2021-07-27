import {Link} from 'react-router-dom';
import Parent from '../parent/parent';
function Header(props){
  console.log(props);
    return(
      <div>
        <nav className={`navbar navbar-expand-lg navbar-light ${props.color}`}>
  <div className="container-fluid">
    <a className="navbar-brand"  >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Features</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" >Action</a></li>
            <li><a className="dropdown-item" >Another action</a></li>
            <li><a className="dropdown-item" >Something else here</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav d-flex justify-content-end" >
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Logout</a>
        </li>
        </ul>
    </div>
  </div>


</nav>

<Parent></Parent>
</div>    
    )
}

export default Header