import React, { useState } from "react";
import "./formSection.css";
import InputGeneral from "../generals/InputGeneral";
import YellowBtn from "../generals/YellowBtn";

const FormSection = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    terms: false,
  };
  const [form, setForm] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hola");
    setForm(initialValues);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let data = { [name]: type === "checkbox" ? checked : value };
    setForm({
      ...form,
      ...data,
    });
  };

  const formFields = [
    {
      type: "text",
      value: form.name,
      name: "name",
      label: "Nombre",
      onChange: handleChange,
      width: "100%",
    },
    {
      type: "email",
      value: form.email,
      name: "email",
      label: "Correo Electrónico",
      onChange: handleChange,
      width: "100%",
    },
    {
      type: "text",
      value: form.phone,
      name: "phone",
      label: "Teléfono",
      onChange: handleChange,
      width: "48%",
    },
    {
      type: "text",
      value: form.address,
      name: "address",
      label: "Ciudad / País",
      onChange: handleChange,
      width: "48%",
    },
  ];

  return (
    <div className="form_section_container flex row wrap jf-c al-c">
      <div style={{textAlign: "center"}}>
        <p className="form_section_text">
          <span className="section_text_span1">Registrate,</span>
          <br />
          conoce más de nuestro curso 
          <br />
          <span className="section_text_span2">y obtén un descuento</span>
        </p>
         <br /><br />
         <div className="flex jf-c">
        <YellowBtn link={"https://t.me/Tradingsinfrontera"}>Mas información!</YellowBtn>
         </div>
      </div>
      <div className="form_container">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex row wrap full-w"
        >
          {formFields.map((item, i) => (
            <div key={i} style={{ width: item.width }}>
              <InputGeneral {...item} />
            </div>
          ))}
          <div style={{ width: "48%" }} className="input_check">
            <label htmlFor="">
              <input
                type="checkbox"
                name="terms"
                value={form.terms}
                onChange={handleChange}
                required
              />
              {"  "}Acepto tratamiento de datos personales
            </label>
          </div>
          <button style={{ width: "48%" }} className="btn_form btn_app">
            Enviar Formulario
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
