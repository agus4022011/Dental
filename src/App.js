import logo from "./logo.svg";
import "./App.css";

import Menu from "./components/menu/menu";
import Home from "./components/home/home";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";

function App() {
  return (
    <div className="App">
      <div className="app__contact">
        <p>
          <LocationOnIcon className="app__contact-icon" />
          Carmelo,prueba 2311
        </p>
        <p>
          {" "}
          <PhoneIcon className="app__contact-icon" />
          +5984551122
        </p>
        <div className='app_contact-recomendation'>
          <FacebookIcon />
          <LocationOnIcon />
          <PhoneIcon />
          <EmailIcon />
        </div>
      </div>
      <Menu />
      <Home />
    </div>
  );
}

export default App;
