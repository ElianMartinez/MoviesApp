import React, { useCallback, useRef, useState } from "react";
import { styles } from "./styles.js";
import "./animation.css";
import { useLocalStorage } from "../../hook/useLocalStorage.js";
export const MovieCard = ({ name, genre, year, stars, img, id }) => {
  const [hover, setHover] = useState(false);
  const [classes, setClasses] = useState("");
  const { saveLike, searchId, deleteId, datos } = useLocalStorage();
  const DoubleClick = useCallback(() => {
    setClasses("MovieCard_heart");
    setTimeout(() => {
      saveLike(id);
      setClasses("");
    }, 800);
  }, []);
  return (
    <div style={styles.container}>
      <div style={styles.relativeCard}>
        <img
          onDoubleClick={classes === "" ? DoubleClick : () => {}}
          // onMouseEnter={() => {
          //   setHover(true);
          // }}
          // onMouseLeave={() => {
          //   setHover(false);
          // }}
          style={{
            ...styles.CardImg,
            ...(hover ? styles.CardImg_hover : null),
          }}
          src={img}
        />
        <div style={styles.starCount}>{stars}</div>

        <div
          // onMouseEnter={() => {
          //   setHover(true);
          // }}
          // onMouseLeave={() => {
          //   setHover(false);
          // }}
          onDoubleClick={classes === "" ? DoubleClick : () => {}}
          style={styles.heart}
        >
          <i style={styles.heartIcon} className={`fas fa-heart ${classes}`}></i>
        </div>
        {datos?.likes?.find((i) => i === id) === id && (
          <i
            onClick={() => deleteId(id)}
            style={styles.heartCount}
            className={`fas fa-heart`}
          ></i>
        )}
      </div>
      <div style={styles.titleInformation}>
        <p style={styles.textCategory}>
          {year} / {genre}
        </p>
        <p style={styles.title}>{name}</p>
      </div>
    </div>
  );
};
