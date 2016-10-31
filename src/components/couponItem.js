import React from 'react';

const CouponItem = ({coupon}) => {
  return (
    <li key={coupon.id} className="list-group-item">{coupon.name}</li>
  )
}

export default CouponItem;
