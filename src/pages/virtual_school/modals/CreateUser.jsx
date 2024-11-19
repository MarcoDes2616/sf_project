import React, { useContext, useState, useEffect } from "react";
import "./modals.css";
import Curtain from "../../../components/generals/Curtain";
import VirtualSchoolContext from "../../../context/VirtualSchoolContext";

const CreateUser = ({ open, onClose, onSubmit, selected }) => {
  const { updateContain } = useContext(VirtualSchoolContext);
  const initialValues = {
    name: "",
    lastname: "",
    birthday: "",
    documentNumber: "",
    email: "",
    password: "",
    signDeclare: false,
    status: true,
    roleId: "",
  }
  const [formData, setFormData] = useState(initialValues);

  useEffect(() => {
    if (open && selected != "") {
      setFormData({
        ...selected,
        birthday: selected.birthday
          ? new Date(selected.birthday).toISOString().split("T")[0]
          : "",
      });
    } else {
      setFormData(initialValues)
    }
  }, [open]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selected) {
      updateContain(selected.id, formData);
    } else {
      onSubmit(formData);
    }
    onClose();
  };

  return (
    <Curtain open={open}>
      <div className="modal_container">
        <div className="flex row jf-sb full-w">
          <p className="x-big full-w bold">
            {selected ? "Editar Usuario" : "Crear Usuario"}
          </p>
          <br /><br /><br />
          <button className="btn_close" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form_container">
          <div className="form_group flex row al-c jf-sb">
            <div className="flex column">
              <label htmlFor="name" className="form_label">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form_input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex column">
              <label htmlFor="lastname" className="form_label">Apellido</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form_input"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form_group">
            <label htmlFor="birthday" className="form_label">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form_input"
              value={formData.birthday}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="documentNumber" className="form_label">
              Documento
            </label>
            <input
              type="text"
              id="documentNumber"
              name="documentNumber"
              className="form_input"
              value={formData.documentNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="email" className="form_label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form_input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          {!selected && (
            <div className="form_group">
              <label htmlFor="password" className="form_label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form_input"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="form_group">
            <label htmlFor="roleId" className="form_label">
              Rol
            </label>
            <select
              id="roleId"
              name="roleId"
              className="form_input"
              value={formData.roleId}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar</option>
              <option value="1">Admin</option>
              <option value="2">Usuario</option>
            </select>
          </div>
          <div className="form_group">
            <label htmlFor="signDeclare" className="form_label">
              <input
                type="checkbox"
                id="signDeclare"
                name="signDeclare"
                checked={formData.signDeclare}
                onChange={handleInputChange}
              />
              Declaración firmada
            </label>
          </div>
          <div className="form_actions">
            <button type="submit" className="btn_submit">
              {selected ? "Actualizar Usuario" : "Crear Usuario"}
            </button>
          </div>
        </form>
      </div>
    </Curtain>
  );
};

export default CreateUser;
