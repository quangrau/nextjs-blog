import React, { PropTypes, Component } from 'react';
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';

class Projects extends Component {

  render() {
    const { url } = this.props;

    return (
      <div>
        <Header title="Projects Me" />
        <div>
          <Navbar pathname={url.pathname} />
          <div className="container">
            Projects page
          </div>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {

};

export default Projects;
