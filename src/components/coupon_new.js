import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';

import { publishCoupon } from '../actions/index';

const FILE_FIELD_NAME = 'couponImage';

const renderDropzoneInput = (field) => {
  const files = field.input.value;

  return (
    <div>
      <label>{field.label}</label>
      <div>
        <Dropzone
          name={field.name}
          onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload) }
        >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            { files.map((file, i) => <li key={i}>{file.name}</li>) }
          </ul>
        )}
      </div>
    </div>
  );
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const validate =  (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.categories) {
    errors.categories = 'Required';
  }
  if(!values.street) {
    errors.street = 'Required';
  }
  if(!values.city) {
    errors.city = 'Required';
  }
  if(!values.zip) {
    errors.zip = 'Required';
  }
  if(!values.country) {
    errors.country = 'Required';
  }

  if(!values.amount) {
    errors.amount = 'Required';
  } else if (isNaN(Number(values.amount))) {
    errors.amount = "Must be a number";
  }

  if(!values.maxRedemptionAmount) {
    errors.maxRedemptionAmount = 'Required';
  } else if (isNaN(Number(values.maxRedemptionAmount))) {
    errors.maxRedemptionAmount = "Must be a number";
  }


  return errors;
}


class PublishCoupon extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(values) {
    console.log('form values: ', values);

    this.props.publishCoupon(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Publish your coupon on our distribution engine</h3>

        <Field name="name" component={renderField} label="Name" />
        <Field name="categories" component={renderField} label="Categories" />
        <Field name="street" component={renderField} label="Street" />
        <Field name="city" component={renderField} label="City" />
        <Field name="zip" component={renderField} label="Zip" />
        <Field name="country" component={renderField} label="Country" />

        <Field name={FILE_FIELD_NAME} component={renderDropzoneInput} label="Coupon File" />

        <Field name="amount" component={renderField} label="Amount" />
        <Field name="maxRedemptionAmount" component={renderField} label="Max Redemption Amount" />

        <Field name="couplingAddress" component={renderField} label="Coupling Wallet Address" />

        <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn">Clear Values</button>
        <br />
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}




export default reduxForm({
  form: 'PublishNewCoupon',
  validate
}, null, { publishCoupon }) (PublishCoupon);
