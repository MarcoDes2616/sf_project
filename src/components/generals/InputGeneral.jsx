import React from 'react';

const InputGeneral = ({ value, label, onChange, type, name }) => {
    return (
      <div className="input_text_container flex column" style={{width: "100%"}}>
        <label htmlFor="">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  };

export default InputGeneral;