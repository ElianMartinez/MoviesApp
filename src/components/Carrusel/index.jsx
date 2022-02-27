import React, { useState } from "react";
import { Card } from "../Card";
import { movies } from "../../data/movies";
import styles from "./Carrusel.module.css";

export const Carrusel = () => {
  const scroll = React.createRef();
  const [moviesArray, setMovies] = useState(movies);
  const [puede, setPuede] = useState(false);
  const [puede1, setPuede1] = useState(false);

  const [currentSelect, setCurrentSelect] = useState(0);

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

  const slideRight = React.useCallback(() => {
    setPuede1(true);
    setTimeout(() => {
      setPuede1(false);
    }, 400);
    const SIZE_CARD = dimensions.width / 5;
    if (currentSelect > 0) {
      scroll.current.scrollLeft -= SIZE_CARD;
      setCurrentSelect(currentSelect - 1);
    } else {
      scroll.current.scrollLeft = scroll.current.scrollWidth;
      setCurrentSelect(movies.length - 1);
    }
  }, [scroll, dimensions.width, currentSelect]);

  const slideLeft = React.useCallback(() => {
    setPuede(true);
    setTimeout(() => {
      setPuede(false);
    }, 400);
    const SIZE_CARD = dimensions.width / 5;
    if (currentSelect < movies.length - 1) {
      scroll.current.scrollLeft += SIZE_CARD;
      setCurrentSelect(currentSelect + 1);
    } else {
      scroll.current.scrollLeft = 0;
      setCurrentSelect(0);
    }
  }, [scroll, dimensions.width, currentSelect]);

  return (
    <>
      <div className={styles.wrapper}>
        <button
          disabled={puede}
          onClick={slideLeft}
          className={`${styles.nextButon} ${styles.button}`}
        >
          <span>&#10093;</span>
        </button>
        <button
          disabled={puede1}
          onClick={slideRight}
          className={`${styles.backButon} ${styles.button}`}
        >
          <span>&#10092;</span>
        </button>
        <div className={styles.scrollContainer} ref={scroll}>
          <div style={{ marginLeft: "100px" }}></div>
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
          <div style={{ marginRight: "100px" }}></div>;
        </div>
      </div>
    </>
  );
};
