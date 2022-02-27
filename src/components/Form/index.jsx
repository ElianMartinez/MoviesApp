import React, { useState } from "react";
import { MovieCard } from "../MovieCard";
import styles from "./form.module.css";
export const Form = ({ active, close }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [stars, setStars] = useState("");
  const [img, setImg] = useState(
    "https://images.plex.tv/photo?size=large-1920&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fxm7CKN5mo09RNAcL1IP1xmJ5avT.jpg"
  );

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
            <MovieCard
              stars={stars}
              img={img}
              name={name}
              genre={genre}
              year={year}
            />
          </div>
        </div>
      </>
    )
  );
};
