import React from "react";

const CommonInput = ({
  label,
  onChange,
  type,
  name,
  id,
  value,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Enter value here "}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
