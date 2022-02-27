import React from "react";
import { styles } from "./styles";

export const Card = ({ width, img, link = "", active = false }) => {
  return (
    <div style={styles.container2}>
      <img
        style={{
          ...{ width: `${width / 5 - 20}px` },
          ...styles.CardImg100,
          ...(active ? styles.active100 : null),
        }}
        src={img}
      />
    </div>
  );
};
