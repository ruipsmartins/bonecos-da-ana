import React from "react";

const Input = ({ name, label, error, autoFocus, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // value={value}
        // onChange={onChange}
        // type={type}
        {...rest}
        name={name}
        id={name}
        autoFocus={autoFocus}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
