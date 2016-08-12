import React, { Component } from 'react';
import  { reduxForm} from 'redux-form';
import * as actions from '../actions/signinActions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }
  render() {
    const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input className="form-control" {...email.input}/>
          {email.touched && email.error && <div className="error">{email.error}</div>}

        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input className="form-control" {...password.input} type="password"/>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password</label>
          <input className="form-control" {...passwordConfirm.input} type="password"/>
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}

        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>

      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please confirm password';
  }
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'passwords must match';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);





