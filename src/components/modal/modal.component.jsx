import React, { useContext } from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { ModalContext } from '../contexts/ModalContext';
import { ReportContext } from '../contexts/ReportContext';

import ReportForm from '../reportForm/reportForm.component';

import './modal.styles.css';

library.add(faTimes);

export const Modal = () => {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const { updateSubmittedEmail } = useContext(ReportContext);
  const { updateSubmittedNote } = useContext(ReportContext);

  const { changeModal } = useContext(ModalContext);

  const handleCloseModal = () => {
    setEmail('');
    setNote('');
    updateSubmittedEmail('');
    updateSubmittedNote('');
    changeModal();
  };

  return (
    <div className="modal">
      <FontAwesomeIcon
        className="modal__fa-times"
        icon="times"
        onClick={handleCloseModal}
      />
      <h2 className="modal__heading"> Primary Report 2021</h2>
      <div className="modal__body">
        <ReportForm
          email={email}
          setEmail={setEmail}
          note={note}
          setNote={setNote}
        />
      </div>
    </div>
  );
};
