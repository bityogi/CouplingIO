import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CouponItem from './couponItem';
import SearchBar from './searchBar';

class CouponList extends Component {

  renderCoupons() {
    if (this.props.coupons.length > 0) {
      const coupons = this.props.coupons;
      console.log('parsed coupons = ', coupons);

      return coupons.map((coupon) => {
        console.log('coupon item: ', coupon);
        return (
           <CouponItem key={coupon.id} coupon={coupon} />
        );
      });
    }

  }

  render() {
    console.log('returned coupons: ', this.props.coupons);
    return (
      <div>
        <SearchBar />
        <ul className="col-md-4 list-group">
          {this.renderCoupons()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ coupons }) {
  return { coupons };
}

export default connect(mapStateToProps)(CouponList);
