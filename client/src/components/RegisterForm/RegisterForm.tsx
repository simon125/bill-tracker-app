import React from 'react';

const RegisterForm = () => {
  return (
    <>
      <form autoComplete="none">
        <div className="form-control">
          <input
            autoComplete="none"
            value="Szymon"
            className="control-input"
            id="name"
            name="name"
            type="text"
          />
          <label className="control-label" htmlFor="name">
            Name
          </label>
        </div>
        <div className="form-control">
          <input
            autoComplete="none"
            value=""
            className="control-input"
            id="email"
            name="email"
            type="text"
          />
          <label className="control-label" htmlFor="email">
            Email
          </label>
        </div>
        <div className="form-control">
          <input
            value=""
            className="control-input"
            id="password"
            name="password"
            type="password"
          />
          <label className="control-label" htmlFor="password">
            Password
          </label>
        </div>
        <div className="form-control">
          <input
            value=""
            className="control-input"
            id="password2"
            name="password2"
            type="password"
          />
          <label className="control-label" htmlFor="password2">
            Repeat password
          </label>
        </div>
        {/* <div className="form-control">
                <input value=""  type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div> */}
        <button className="submit-button">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
