import React from 'react';

class Footer extends React.PureComponent {

  scrollUp() {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 0) {
        window.scrollTo(0, 0)
        setTimeout(this.scrollUp, 10)
    }
  }

  render() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 margin-20">
            <ul className="list-inline social">
              <li><small>Copyright @ Rykido.com </small></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Services</a></li>
            </ul>
          </div>
          <div className="col-sm-4 text-right">
            <i
              className="fa fa-angle-up fa-3x square"
              onClick={() => this.scrollUp()}
              ref={(el) => this.el = el}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
}

export default Footer;
