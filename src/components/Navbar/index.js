import React from 'react';
import rykidoLogo from '../../assets/img/RykidoLogo.png';

class Navbar extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    if (e.srcElement.body.scrollTop > 140) {
        this.el.classList.add("open");
      } else {
          this.el.classList.remove("open");
        }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top" ref={(el) => this.el = el}>
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="logo" href="index.html"><img src={rykidoLogo} alt="Logo" /></a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#home" className="scroll">HOME</a></li>
            <li><a href="#">DRIVER</a></li>
            <li><a href="#">BRAND</a></li>
            <li><a href="#">JOIN NOW</a></li>
            <li><a href="#">SIGN IN</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
}

export default Navbar;
