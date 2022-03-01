import React, { useState } from "react";
import { MovieCard } from "../MovieCard";
import styles from "./form.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../TextInput";

export const Form1 = ({ active, close }) => {
  const [img, setImg] = useState(
    "https://images.plex.tv/photo?size=large-1920&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fxm7CKN5mo09RNAcL1IP1xmJ5avT.jpg"
  );

  const formikEnhancer = useFormik({
    initialValues: {
      name: "",
      img: "",
      stars: "",
      genre: "",
      year: 1800,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Este campo es obligatorio"),
      genre: Yup.string().required("Este campo es obligatorio"),
      img: Yup.string().required("Este campo es obligatorio"),
      stars: Yup.number().required("Este campo es obligatorio").max(10,"No puede ser mayor a 10").min(0,"El valor mínimo es 0"),
      year: Yup.number().required("Este campo es obligatorio").max(2022, "No puede ser mayor al 2022")
    }),
    handleSubmit: (values, { setSubmitting }) => {},
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
  } = formikEnhancer;
  return (
    active && (
      <>
        <div onClick={close} className={styles.container}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.modal}
          >
            <div className={styles.header}>
              <p>Crear Movie</p>
              <button>X</button>
            </div>
            <div className={styles.body}>
              <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                  <TextInput
                    label="Nombre"
                    nameInput="name"
                    type="text"
                    autoFocus
                    name={values.name}
                    touched={touched.name}
                    errors={errors.name}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <TextInput
                    label="Genero"
                    nameInput="genre"
                    name={values.genre}
                    type="text"
                    touched={touched.genre}
                    errors={errors.genre}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <TextInput
                    label="Año"
                    nameInput="year"
                    name={values.year}
                    type="number"
                    touched={touched.year}
                    errors={errors.year}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <TextInput
                    label="Puntos"
                    nameInput="stars"
                    name={values.stars}
                    type="number"
                    touched={touched.stars}
                    errors={errors.stars}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <TextInput
                    label="Imagen"
                    nameInput="img"
                    name={values.img}
                    type="text"
                    touched={touched.img}
                    errors={errors.img}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </form>
              </div>
              <div className={styles.preview}>
              {/* <MovieCard
              stars={values.stars}
              img={values.img}
              name={values.name}
              genre={values.genre}
              year={values.year}
            />  */}
              </div>
            </div>
            <div className={styles.footer}>
              <button className={styles.submitBtn}>Crear</button>
              <button className={styles.cancelBtn}>Cancelar</button>
            </div>
          </div>
        </div>
      </>
    )
  );
};



