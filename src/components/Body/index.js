import React from 'react';

function Body() {
  return(
    <section className="what-can-be-done" style={{marginTop: '2em', padding: '40px'}}>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 col-xs-12 col-md-4">
            <i className="fa fa-industry fa-4x" />
            <h2>Retain total control over your campaigns.</h2>
            <p>You get to choose which drivers you want to work with. Rykido makes communication, scheduling and approval a breeze. We’re with you every step of the way.</p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4">
              <i className="fa fa-usd fa-4x fa-stack-4x" />
            <h2>Pay when you see results.</h2>
            <p>Say goodbye to shady marketing platforms that make it hard for you to track your ROI. Rykido’s easy-to-read metrics and accurate reporting ensure you get bang for every buck you spend.</p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4">
            <i className="fa fa-address-card-o fa-4x" />
            <h2>Stop the guesswork.</h2>
            <p>You know everything about your ideal customer, even the fact that they Uber/Lyft/Rideshare to work. Instead of exhausting every other marketing platform, how about this? Market to them during their commute.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
