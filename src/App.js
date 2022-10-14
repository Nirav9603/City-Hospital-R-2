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

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/departments"} exact component={Departments} />
        <Route path={"/medicines"} exact component={Medicines} />
        <Route path={"/doctors"} exact component={Doctors} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/contact"} exact component={Contact} />
        <Route path={"/appointment"} exact component={Appointment} />
        <Route path={"/auth"} exact component={Auth}/>
        <Route path={"/list_app"} exact component={ListAppointment}/>
        <Route path={"/doctor_details"} exact component={DoctorDetails}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
