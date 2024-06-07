import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Parent from "./Pages/Parents";
import Teacher from "./Pages/Teachers";
import Admin from "./Pages/Admins";
import ReferralProgrames from "./Pages/ReferralProgrames";
import CareerOpportunities from "./Pages/CareerOpportunities";
import Download from "./Pages/Download";
import ScrollUp from "react-scroll-up";
import arrowUpImage from "../src/assets/up1-01.png";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/parent" element={<Parent />} />
          <Route path="/products/teacher" element={<Teacher />} />
          <Route path="/products/admin" element={<Admin />} />
          <Route
            path="/join-us/referral-program"
            element={<ReferralProgrames />}
          />
          <Route
            path="/join-us/career-opportunities"
            element={<CareerOpportunities />}
          />
          <Route path="/download" element={<Download />} />
        </Routes>
        <Footer />
        <ScrollUp showUnder={150} duration={2000}>
          <img src={arrowUpImage} alt="Scroll to top" />
        </ScrollUp>
      </div>
    </Router>
  );
}

export default App;
