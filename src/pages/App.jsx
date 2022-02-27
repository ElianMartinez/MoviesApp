import React, { useState } from "react";
import { Carrusel } from "../components/Carrusel";
import { Form } from "../components/Form";
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
      <Form active={activeModal} close={close} />
      <Carrusel />
      <ListMovies />
    </>
  );
}

export default App;
