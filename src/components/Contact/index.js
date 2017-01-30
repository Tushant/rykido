import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section id="submit" className="pad-lg light-gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 text-center">
              <i className="fa fa-envelope-o margin-40"></i>
              <h2 className="white">Contact Us</h2>
              <br />
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <form role="form">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="message" cols="30" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-wide">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
