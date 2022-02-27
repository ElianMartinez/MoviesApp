import React, { useState } from "react";
import { Card } from "../Card";
import { movies } from "../../data/movies";
import "./styles.css";
import arrow from "../../assets/arrow.png";
export const Carrusel = () => {
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
    let array = moviesArray;
    array.push(moviesArray[currentSelect - 2]);
    setMovies(array);
    const to = dimensions.width / 5;
    scroll.current.scrollLeft += to;
    setCurrentSelect(currentSelect + 1);
  }, [scroll]);

  return (
    <div className="cards container10">
      <div className="buttonConatiner">
        <button
          onClick={slideLeft}
          className="nextButton"
          style={{ width: `${dimensions.width / 5 - 20}px` }}
        >
          <div className="btnC">
            <img src={arrow} alt="arrow" />
          </div>
          <p>{moviesArray[currentSelect + 1].name}</p>
        </button>
      </div>
      x
      <div
        ref={scroll}
        className="carrusel"
        style={{
          display: "flex",
          overflow: "hidden",
          scrollBehavior: "smooth",
          msUserSelect: "none",
          userSelect: "none",
          position: "relative",
        }}
      >
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
