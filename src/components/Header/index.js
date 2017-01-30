import React from 'react';
import rykidoLogo from '../../assets/img/RykidoLogo.png';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row header-info">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <h1 className="wow fadeIn">Create Offers and Marketing Campaigns That Deliver <br />
            Customers To Your Door-Literally</h1>
            <br />
            <p className="lead wow fadeIn" data-wow-delay="0.5s">Get your message in front of thousands of commuters and riders <br />
              every day. Get the people who matter to interact with your brand.
            </p>
            <br />
            <p className="lead wow fadeIn" data-wow-delay="0.5s">Our platform connects you with the most talented drivers in your
              area – it’s <br />fast, easy, and profitable. Get started.
            </p>
            <br />
            <p className="lead wow fadeIn" data-wow-delay="0.5s">Are you a driver? Click here to sign up.<br />
             Start making extra money for advertising, while you do what you do best.
            </p>
            <br />
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <div className="row">
                  <div className="col-xs-6 text-right wow fadeInUp" data-wow-delay="1s">
                    <a href="#driver" className="btn btn-secondary btn-lg scroll">Driver</a>
                  </div>
                  <div className="col-xs-6 text-left wow fadeInUp" data-wow-delay="1.4s">
                    <a href="#brand" className="btn btn-primary btn-lg scroll">Brand</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
