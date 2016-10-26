import React, { PropTypes, Component } from 'react';
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';

class About extends Component {

  render() {
    const { url } = this.props;

    return (
      <div>
        <Header title="About Me" />
        <div>
          <Navbar pathname={url.pathname} />
          <div className="container">
            About Me?
          </div>
        </div>
      </div>
    )
  }
}

About.propTypes = {

};

export default About;
