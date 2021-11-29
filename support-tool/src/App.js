import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">logo</div>
        <div className="nav-menu-items">
          <ul className="nav-menu-list-items">
            <li>home</li>
            <li>services</li>
            <li>discover</li>
            <li>news</li>
          </ul>
        </div>
        <div className="nav-basket-container">
          <div className="nav-basket-icon">icon</div>
          <div className="nav-notification-icon">icon</div>
        </div>
      </div>
    </>
  );
}

export default App;
