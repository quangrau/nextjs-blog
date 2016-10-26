import React, { PropTypes, Component } from 'react';
import cowsay from 'cowsay-browser';
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';

class Index extends Component {

  render() {
    const { url } = this.props;

    return (
      <div>
        <Header />
        <div>
          <Navbar pathname={url.pathname} />
          <div className="container">
            <pre>
              {cowsay.say({
                text: 'Hello world!',
                e : "oO",
              })}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

Index.propTypes = {

};

export default Index;
