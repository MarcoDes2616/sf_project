import React from "react";

const InputText = ({ value, label, onChange, type }) => {
  return (
    <div className="input_text_container">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
