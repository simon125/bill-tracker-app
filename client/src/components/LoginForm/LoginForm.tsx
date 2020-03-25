import React from 'react';

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="form-control">
          <input
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
        {/* <div className="form-control">
                <input
                  value=""
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div> */}
        <button className="submit-button">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
