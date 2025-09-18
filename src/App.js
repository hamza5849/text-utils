import { useState, useEffect } from "react";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textfoam from "./Components/Textfoam";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";

function App() {
  const [Mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  // Ensure body background is set on mount and whenever Mode changes
  useEffect(() => {
    document.body.style.backgroundColor = Mode === "dark" ? "#043743" : "white";
  }, [Mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      // body background will be updated by useEffect
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      // body background will be updated by useEffect
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar tittle="TEXTUTILS" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Textfoam
                showAlert={showAlert}
                heading="TRY TEXTUTILS- Your Text Assistant  "
                mode={Mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode={Mode} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
