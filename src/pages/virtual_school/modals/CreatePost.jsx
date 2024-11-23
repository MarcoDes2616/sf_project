import React, { useContext, useEffect, useState } from "react";
import Curtain from "../../../components/generals/Curtain";
import VirtualSchoolContext from "../../../context/VirtualSchoolContext";
import "./modals.css"

const CreatePost = ({ open, onClose, onSubmit, selected }) => {
  const {updateContain} = useContext(VirtualSchoolContext)
  const initialValues = {
    file: null,
    title: "",
    description: "",
    tagId: "",
  }
  const [formData, setFormData] = useState(initialValues);
  
  useEffect(() => {
    if(open && selected != ""){
      let data = {
        title: selected.title,
        description: selected.description,
        tagId: selected.tag?.id,
        file: null
      }
      setFormData(data)
    } else {
      setFormData(initialValues)
    }
  }, [open])
  
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
      data.append("file", formData.file);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("tagId", formData.tagId);

    if (selected !== "") {
      updateContain(selected.id, formData.file != null ? data : formData);
    } else {
      onSubmit(data);
    }
    onClose();
  };
  

  return (
    <Curtain open={open}>
      <div className="modal_container md">
        <div className="flex row jf-sb full-w">
          <p className="x-big full-w bold">Crear Publicación</p>
          <button className="btn_close" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form_container">
          <div className="form_group">
            <label htmlFor="file">Imagen</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleInputChange}
              accept="image/*"
              required={!selected}
            />
          </div>
          {selected != "" && (
            <a target="_blank" href={selected.imageUrl}>Ver imagen actual</a>
          )}
          <div className="form_group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="tagId">Categoría</label>
            <select
              id="tagId"
              name="tagId"
              value={formData.tagId}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              <option value={1}>Trading</option>
              <option value={2}>Analisis</option>
              <option value={3}>Resultados</option>
              <option value={4}>Clases</option>
              <option value={5}>Gestión</option>
              <option value={6}>Señales</option>
            </select>
          </div>

          <div className="form_actions">
            <button type="submit" className="btn_submit">
              {selected ? "Actualizar Post" : "Crear Post"}
            </button>
          </div>
        </form>
      </div>
    </Curtain>
  );
};

export default CreatePost;

