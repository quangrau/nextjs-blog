import React, { PropTypes } from 'react';
import Head from 'next/head';

const Header = ({ title, titleDefault }) => {
  return (
    <Head>
      <title>{ title ? `${title} | ${titleDefault}` : titleDefault }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous" />
    </Head>
  )
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  titleDefault: 'The simple blog using nextJS',
};

export default Header;
