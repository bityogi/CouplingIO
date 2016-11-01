import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { publishCoupon } from '../actions/index';
import { Link } from 'react-router';

class PublishCoupon extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.publishCoupon(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields:
      {
        categories,
        image,
        name,
        street,
        city,
        zip,
        country ,
        amount,
        maxRedemptionAmount
      },
        handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Publish your coupon on our distribution engine</h3>

        <div>
          <label>Name</label>
          <input type="text" className="form-control" {...name} />

        </div>

      

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.title = 'Enter vendor name';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.street) {
    errors.content = 'Enter street';
  }

  return errors;
}

export default reduxForm({
  form: 'PublishNewCoupon',
  fields: ['name', 'categories', 'street', 'city', 'zip', 'country'],
  validate
}, null, { publishCoupon }) (PublishCoupon);
