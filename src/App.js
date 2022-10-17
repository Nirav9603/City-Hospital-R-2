import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./container/home/Home";
import About from "./container/about/About";
import Departments from "./container/departments/Departments";
import Doctors from "./container/doctors/Doctors";
import Contact from "./container/contact/Contact";
import Appointment from "./container/appointment/Appointment";
import {Switch, Route} from "react-router-dom"
import Auth from './container/auth/Auth';
import Medicines from './container/medicines/Medicines';
import ListAppointment from './container/appointment/ListAppointment';
import DoctorDetails from './container/doctors/DoctorDetails';
import PublicRoute from './Route/PublicRoute';

function App() {

  return (
    <>
      
      <Switch>
        <PublicRoute path={"/"} exact component={Home} />
        <PublicRoute path={"/departments"} exact component={Departments} />
        <PublicRoute path={"/medicines"} exact component={Medicines} />
        <PublicRoute path={"/doctors"} exact component={Doctors} />
        <PublicRoute path={"/about"} exact component={About} />
        <PublicRoute path={"/contact"} exact component={Contact} />
        <PublicRoute path={"/appointment"} exact component={Appointment} />
        <PublicRoute Restricted={true} path={"/auth"} exact component={Auth}/>
        <PublicRoute path={"/list_app"} exact component={ListAppointment}/>
        <PublicRoute path={"/doctor_details"} exact component={DoctorDetails}/>
      </Switch>
    </>
  );
}

export default App;
