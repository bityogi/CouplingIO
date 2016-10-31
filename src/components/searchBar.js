import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCoupons } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    this.props.fetchCoupons(this.state.term);
    //this.setState({ term: '' });
  }

  render() {
    return (
      <div className="form-control">
        <input
            placeholder="Search for coupons"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary" onClick={this.onFormSubmit}>Submit</button>
        </span>
    </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchCoupons }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
