import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Details1 from "./components/Details1";
import Footer from './components/Footer';
import "../src/components/footer.css"
function App() {
  return (
   
    <div class="fluid">
     <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/details1" element={<Details1/>}/>
      </Routes>
      <Footer />
     </HashRouter>
    
    </div>
   
  );
}

export default App;
