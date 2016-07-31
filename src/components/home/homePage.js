import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
      <h1>Pain Management</h1>
    <p>Asses your pain levels day by day to.</p>
    <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>
  );
  }
}

export default HomePage;
