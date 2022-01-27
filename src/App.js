import "./App.css";
import Navbar from "./Navbar";
import Claims from "./Claims";
import Dashboard from "./Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar> </Navbar>

      <div>
        <Routes>
          {/* <Route exact path="/" component={App} /> */}
          <Route exact="true" path="/Claims" element={<Claims />} />
          <Route exact="true" path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
