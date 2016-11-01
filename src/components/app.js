import React, { Component } from 'react';
import { Link } from 'react-router';



export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Coupling IO</h2>
        <Link to="/coupon/new" className="btn btn-primary">Publish your coupon</Link>
        {this.props.children}
      </div>
    );
  }
}
