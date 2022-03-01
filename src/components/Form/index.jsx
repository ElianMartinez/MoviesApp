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
      stars: Yup.number().required("Este campo es obligatorio"),
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
                </form>
              </div>
              <div className={styles.preview}></div>
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

{
  /* <MovieCard
              stars={stars}
              img={img}
              name={values.name}
              genre={genre}
              year={year}
            /> */
}
