import React, { useState, useEffect, useContext } from "react";
import Curtain from "../../../components/generals/Curtain";
import VirtualSchoolContext from "../../../context/VirtualSchoolContext";
import "./modals.css"

const CreateVideo = ({ open, onClose, onSubmit, selected }) => {
  const { getAllCourses, allCourses, updateContain } = useContext(VirtualSchoolContext);
  const initialValues = {
    videoUrl: "",
    duration: 0,
    courseId: null,
    file: null,
    title: "",
  }
  const [formData, setFormData] = useState(initialValues);

  useEffect(() => {
    getAllCourses({ flag: true });
  }, []);
  
  useEffect(() => {
    if(open && selected != ""){
      const {imageUrl, ...restOfData} = selected
      setFormData({...formData,...restOfData})
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
    data.append("videoUrl", formData.videoUrl);
    data.append("duration", formData.duration);
    data.append("courseId", formData.courseId);
    data.append("file", formData.file);
    data.append("title", formData.title);

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
          <p className="x-big full-w bold">Crear Video</p>
          <button className="btn_close" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form_container">
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
            <a href={selected.imageUrl} target="_blank">Ver imagen actual</a>
          )}
          <div className="form_group">
            <label htmlFor="courseId">Asignar curso</label>
            <select
              id="courseId"
              name="courseId"
              value={formData.courseId || ""}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Selecciona un curso
              </option>
              {allCourses &&
                allCourses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
            </select>
          </div>

          <div className="form_group">
            <label htmlFor="videoUrl">URL del Video</label>
            <input
              type="url"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="duration">Duración (en minutos)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form_actions">
            <button type="submit" className="btn_submit">
              {selected ? "Actualizar Video" : "Crear Video"}
            </button>
          </div>
        </form>
      </div>
    </Curtain>
  );
};

export default CreateVideo;

