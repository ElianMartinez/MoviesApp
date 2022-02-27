import React, { useState } from "react";
import { Card } from "../Card";
import { movies } from "../../data/movies";
import arrow from "../../assets/arrow.png";
import styles from "./Carrusel.module.css";

export const Carrusel = () => {
  console.log(styles);
  const scroll = React.createRef();
  const [moviesArray, setMovies] = useState(movies);
  const [puede, setPuede] = useState(false);
  const [currentSelect, setCurrentSelect] = useState(2);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const slideLeft = React.useCallback(() => {
    setCurrentSelect(currentSelect + 1);
  }, [scroll]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer} ref={scroll}>
        {moviesArray.map((item, i) => {
          return (
            <Card
              active={i === currentSelect}
              width={dimensions.width}
              key={i}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};
