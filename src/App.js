import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/About-us/AboutUs";
import Solutions from "./pages/Solutions/Solutions";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/solutions" element={<Solutions />} />
      {/* <Route path="/resources" element={<Resources />} /> */}
      {/* <Route path="/contact" element={<ContactUs />} /> */}
      
    </Routes>
  );
}
export default App;
