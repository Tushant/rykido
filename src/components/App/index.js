import React from 'react';
import Navbar from '../Navbar/index';
import Header from '../Header/index';
import Body from '../Body/index';
import Contact from '../Contact/index';
import Footer from '../Footer/index';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Navbar />
        <Header />
        <Body />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
