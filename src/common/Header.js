import React, {PropTypes, Component } from 'react';
import { Link, IndexLink} from 'react-router';
// import LoadingDots from './LoadingDots';
import { connect } from 'react-redux';
class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return [
      <Link to="/painrecords" activeClassName="active">Pain Records |</Link>
,
        <Link className="nav-link" to="/signout"> Sign Out</Link>
      ]
    } else {
      // show a link to sign in or sign up
      return [

          <Link className="nav-link" to="/signin" key={1}>Sign In |</Link>
,

          <Link className="nav-link" to="/signup" key={2}> Sign Up</Link>

      ];
    }
  }


  render() {
    return (

      <nav>

        <IndexLink to="/" activeClassName="active"> Home</IndexLink>
        {" | "}

        <Link to="/about" activeClassName="active">About</Link>
        {" | "}
        {this.renderLinks()}

      </nav>
    );
  }
}



Header.propTypes = {
  loading: PropTypes.bool.isRequired
};



function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
