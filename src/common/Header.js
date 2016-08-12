import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>

      <IndexLink to="/" activeClassName="active"> Home</IndexLink>
      {" | "}
      <Link to="/painrecords" activeClassName="active">Pain Records</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>

      {" | "}
      <Link to="/signin" activeClassName="active">Sign in</Link>
      {" | "}
      <Link to="/signup" activeClassName="active">Sign up</Link>
      {" | "}
      <Link to="/signout" activeClassName="active">Sign out</Link>

    </nav>
  );
};



Header.propTypes = {
  loading: PropTypes.bool.isRequired
};



export default (Header);
