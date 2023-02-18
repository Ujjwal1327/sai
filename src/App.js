import ThankYouPage from "./pages/ThankYou/ThankYouPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import GoToTop from "./components/GoToTop";
import Footer from "./components/footer/Footer";
import LegalServicePage from "./pages/LegalServicePage";
import LoanServicePage from "./pages/LoanServicePage";
import PrivacyPolicy from "./pages/PP/PrivacyPolicy";
import TnC from "./pages/TnC";
import ScrollToTop from "./components/ScrollToTop";
import ConsultServicePage from "./pages/ConsultServicePage";
import UnderMaintainance from "./pages/Under Maintainance/UnderMaintainance";
import EachServiceDetailsPage from "./pages/EachServiceDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar path="/" />
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/thank" element={<ThankYouPage />} />
          <Route
            path="/public-limited-comapny"
            element={<EachServiceDetailsPage />}
          />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/tnc" element={<TnC />} />
          <Route path="/loan-service" element={<LoanServicePage />} />
          <Route path="/consultancy-service" element={<ConsultServicePage />} />
          <Route path="/maintainance" element={<UnderMaintainance />} />
          <Route path="/legal-service" element={<LegalServicePage />} />
        </Route>
      </Routes>
      <GoToTop />
      <Footer />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
