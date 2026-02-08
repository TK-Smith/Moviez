import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import More from "./blog/More";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more/:id" element={<More />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
