import Navbar from "./components/Navbar";
import WelcomeSection from "./components/Welcome";
import MyInfo from "./components/MyInfo";
import "./App.scss";

function App() {

  return (
    <>
      <div className="header-section">
        <Navbar/>
      </div>
      <div className="main-section">
        <WelcomeSection/>
        <MyInfo />
      </div>
    </>
  )
}

export default App