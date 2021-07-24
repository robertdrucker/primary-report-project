import React, { useContext } from 'react';

import { ModalContext } from '../contexts/ModalContext';
import { ReportContext } from '../contexts/ReportContext';
import { Overlay } from '../overlay/overlay.component';
import { Modal } from '../modal/modal.component';

import './mainPage.styles.css';

export const MainPage = () => {
  const { modalState, changeModal } = useContext(ModalContext);
  const { submittedEmail, updateSubmittedEmail } = useContext(ReportContext);
  const { submittedNote, updateSubmittedNote } = useContext(ReportContext);

  const handleOpenModal = () => {
    changeModal();
  };

  const handleClearSubmissionResults = () => {
    updateSubmittedEmail('');
    updateSubmittedNote('');
  };

  return (
    <div className="mainPage">
      {submittedEmail ? (
        <div className="submission">
          <p className="submission__confirmation-main">
            Thank you for your submission.
          </p>
          <p className="submission__confirmation-sub">
            We received the following data from you:
          </p>
          <p className="submission__confirmation-email">
            Email list:
            <span class="submission__data-break">{submittedEmail}</span>
          </p>
          {submittedNote ? (
            <p className="submission__confirmation-note">
              Note:<span class="submission__data-break">{submittedNote}</span>
            </p>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className="submission__welcome">
          <p className="submission__confirmation-main">
            Welcome to Our Primary Reporting System
          </p>
          <p className="submission__confirmation-sub"></p>
        </div>
      )}
      {modalState ? <Overlay /> : ''}
      {modalState ? (
        ''
      ) : (
        <div className="submission__btn-group">
          <button
            className="submissions__modal-btn"
            type="button"
            onClick={handleOpenModal}
          >
            Open Form
          </button>

          {submittedEmail ? (
            <button
              className="submissions__clear-btn"
              type="button"
              onClick={handleClearSubmissionResults}
            >
              Clear Confirmation
            </button>
          ) : (
            ''
          )}
        </div>
      )}
      {modalState ? <Modal /> : ''}
    </div>
  );
};
