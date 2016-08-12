import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../src/actions/signinActions';


class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

export default connect(null, actions)(Signout);
