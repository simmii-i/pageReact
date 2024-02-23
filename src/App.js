import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact  from "./Components/Contact.jsx";
import Services  from "./Components/Services.jsx";

import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/Contact.scss"
import "./style/Services.scss"
import "./style/mediaquery.scss"

function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/services" element={<Services/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    );
}

export default App;
