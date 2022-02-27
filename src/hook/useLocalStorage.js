import React, { useState } from "react";

export const useLocalStorage = () => {
  const [datos, setDatos] = useState();

  const searchId = (id) => {
    const likes = localStorage.getItem("likes");
    if (likes) {
      let data = JSON.parse(likes);
      setDatos(data);
      const a = data.likes.find((i) => i === id);
      return a === id;
    } else {
      return false;
    }
  };

  const deleteId = (id) => {
    const likes = localStorage.getItem("likes");
    let data = JSON.parse(likes);
    const a = data.likes.filter((i) => i !== id);
    setDatos({ likes: a });
    localStorage.setItem("likes", JSON.stringify({ likes: a }));
  };

  const saveLike = (id) => {
    const likes = localStorage.getItem("likes");
    if (likes) {
      if (!searchId(id)) {
        let data = JSON.parse(likes);
        data.likes.push(id);
        setDatos(data);
        localStorage.setItem("likes", JSON.stringify(data));
      }
    } else {
      let data = { likes: [] };
      data.likes.push(id);
      setDatos(data);
      localStorage.setItem("likes", JSON.stringify(data));
    }
  };

  return { saveLike, searchId, deleteId, datos };
};
