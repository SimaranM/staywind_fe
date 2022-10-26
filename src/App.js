import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
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


function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* {user && <Route path="/" element={<Main />} />} */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/particular-hotel' element={<Hotel />} />
        <Route path='/hotels/particular-hotel/reaservation' element={<PaymentList />} />
        <Route path='/singlepage/:id' element={<SinglePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;