import React from 'react';

const CouponItem = ({ coupon }) => {
  const { name, url } = coupon;

  return (
    <li className="list-group-item">
      <div className="coupon-list">
        <div className="media-left">
          <img className="media-object" src={url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{name}</div>
        </div>
      </div>

    </li>
  )
}

export default CouponItem;
