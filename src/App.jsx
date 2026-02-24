import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import More from "./blog/More";
import Home from "./Home";
import Pages from "./Pages";
import Genres from "./components/Genres";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/pages/:page" element={<Pages />} />
        <Route path="/more/:id" element={<More />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
// https://www.youtube.com/watch?v=LcCSy7qyflE&list=RDLcCSy7qyflE&start_radio=1
