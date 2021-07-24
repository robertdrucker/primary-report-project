import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider(props) {
  const [modalState, setModal] = useState(false);
  const changeModal = () => setModal(!modalState);
  return (
    <ModalContext.Provider value={{ modalState, changeModal }}>
      {props.children}
    </ModalContext.Provider>
  );
}
