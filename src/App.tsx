import Navbar from "./components/Navbar";
import WelcomeSection from "./components/Welcome";
import "./App.scss";

function App() {

  return (
    <>
      <div className="header-section">
        <Navbar/>
      </div>
      <div className="main-section">
        <WelcomeSection/>
      </div>
    </>
  )
}

export default App