import React, { useContext, useState, useEffect } from "react";
import "./modals.css";
import Curtain from "../../../components/generals/Curtain";
import VirtualSchoolContext from "../../../context/VirtualSchoolContext";

const CreateCourse = ({ open, onClose, onSubmit, selected }) => {
  const { updateContain } = useContext(VirtualSchoolContext);
  const initialValues = {
    title: "",
    description: "",
    file: null,
    price: 0,
    discount: 0,
  }
  const [formData, setFormData] = useState(initialValues);

  useEffect(() => {
    if (open && selected != "") {
      setFormData({ ...selected });
    } else {
      setFormData(initialValues)
    }
  }, [open]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files && !files[0].type.startsWith('image/')) {
      alert("Por favor, selecciona un archivo de tipo imagen.");
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("file", formData.file);
    data.append("price", formData.price);
    data.append("discount", formData.discount);

    if (selected !== "") {
      updateContain(selected.id, formData.file != null ? data : formData);
    } else {
      onSubmit(data);
    }
    onClose();
  };

  return (
    <Curtain open={open}>
      <div className="modal_container">
        <div className="flex row jf-sb full-w">
          <p className="x-big full-w bold">Crear Curso</p>
          <button className="btn_close" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form_container">
          <div className="form_group">
            <label htmlFor="title" className="form_label">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form_input"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="description" className="form_label">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="form_textarea"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="file" className="form_label">
              Imagen
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="form_input"
              onChange={handleInputChange}
              accept="image/*"
              required={!selected}
            />
          </div>
          {selected != "" && <a target="_blank" href={selected.imageUrl}>Ver imagen actual</a>}
          <div className="form_group">
            <label htmlFor="price" className="form_label">
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="form_input"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Descuento */}
          <div className="form_group">
            <label htmlFor="discount" className="form_label">
              Descuento (%)
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              className="form_input"
              value={formData.discount}
              onChange={handleInputChange}
            />
          </div>
          {/* Botón de Enviar */}
          <div className="form_actions">
            <button type="submit" className="btn_submit">
              {selected ? "Actualizar Curso" : "Crear Curso"}
            </button>
          </div>
        </form>
      </div>
    </Curtain>
  );
};

export default CreateCourse;
