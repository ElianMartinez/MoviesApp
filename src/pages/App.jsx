import React, { useState } from "react";
import { Carrusel } from "../components/Carrusel";
import { Form1 } from "../components/Form";
import { ListMovies } from "../components/ListMovies";

function App() {
  const [activeModal, setActiveModal] = useState(true);
  const close = () => {
    setActiveModal(false);
  };

  const open = () => {
    setActiveModal(true);
  };

  return (
    <>
      <Form1 active={activeModal} close={close} />
      <Carrusel />
      <ListMovies />
    </>
  );
}

export default App;
