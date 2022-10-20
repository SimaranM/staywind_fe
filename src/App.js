import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import Footer from "./Common/footer/Footer"
import About from "./Components/About/About"
// import Gallery from "./Components/gallery/Gallery"
// import Destinations from "./Components/Destinations/Home"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
/*-------------blog------------ */
// import Blog from "./Components/Blog/Blog"
// import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
// import Testimonial from "./Components/Testimonial/Testimonial"
import ContactFrom from "./Components/Contact/ContactFrom"
import Login from "./Components/login/Login"
import List from "./Components/pages/list/List";
import Hotel from "./Components/pages/hotel/Hotel";
import SinglePage from "./SinglePage/SinglePage"


// import Register from "./Components/login/Register"
/*-------------blog------------ */


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/particular-hotel' element={<Hotel />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/contact' element={<ContactFrom />} />
        {/* <Route path='/singlepage/:id' element={<SinglePage />} /> */}
        <Route path='/singlepage/:id' element={<SinglePage />} />

        {/* <Route path='/gallery' exact component={Gallery} /> */}
        {/* <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} /> */}
        {/* <Route path='/Register' component={Register} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;