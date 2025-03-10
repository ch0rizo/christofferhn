import './Navbar.css'
import './BlinkingArrow'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-leftside">
        <div className="logo">christofferhn</div>
        <div className="vertical-divider"></div>
        <div className="section">
          <span className="blinking">{'>'}</span> /01 INTRO
        </div>
      </div>
      <div className="navbar-rightside">
        <div>DEFAULT</div>
      </div>
    </div>
  );
}

export default Navbar;
