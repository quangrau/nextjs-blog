import React, { PropTypes } from 'react';
import Link from 'next/link';
import style from 'next/css';

const navStyles = style({
  textTransform: 'uppercase',
  margin: '30px 0',
});


const Navbar = (props, context) => {
  const menu = [{
    pathname: '/',
    label: 'Blog',
  }, {
    pathname: '/projects',
    label: 'Projects',
  }, {
    pathname: '/about',
    label: 'Me?',
  }];

  return (
    <nav className={`navbar navbar-light ${navStyles}`}>
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            (╯°□°）╯
          </a>
        </Link>
        <ul className="nav navbar-nav">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${props.pathname === item.pathname ? 'active' : ''}`}
            >
              <Link href={item.pathname}>
                <a className="nav-link">{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
};

Navbar.propTypes = {

};

export default Navbar;
