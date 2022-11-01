import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import {useState} from 'react';
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Login from "./components/login/Login";
// import Main from "./components/main/Main";
import Signup from "./components/singup/Singup";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/pages/Home";
import List from "./components/pages/list/List";
import Hotel from "./components/pages/hotel/Hotel";
import SinglePage from "./SinglePage/SinglePage"
import PaymentList from "./components/pages/paymentlist/PaymentList";
import Property from "./components/Property/Property";
//import AccountDetails from "./components/pages/account/AccountDetails";




function App() {
  const user = localStorage.getItem("token");

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const setSearchOptions = {setDestination, setOpenDate, setDate, setOpenOptions, setOptions}
  const searchOptions = {destination, openDate, date, openOptions, options}

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* {user && <Route path="/" element={<Main />} />} */}
        <Route path='/' element={<Home {...setSearchOptions} {...searchOptions} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/property' element={<List {...searchOptions} />} />
        <Route path='/property/hotelDetails' element={<Hotel />} />
        <Route path='/property/hotelDetails/reservation' element={<PaymentList />} />
        <Route path='/singlepage/:id' element={<SinglePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/uploadProperty" element={<Property />} />
        {/*<Route path="/accoutdetails/:id" element={<AccountDetails />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;