import React, { useContext } from 'react';
import { useState } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import { ReportContext } from '../contexts/ReportContext';

import './reportForm.styles.css';

const ReportForm = (props) => {
  const { email, setEmail, note, setNote } = props;

  const { changeModal } = useContext(ModalContext);
  const { updateSubmittedEmail } = useContext(ReportContext);
  const { updateSubmittedNote } = useContext(ReportContext);

  const [showInvalidEmailMsg, setShowInvalidEmailMsg] = useState(false);

  const resetState = () => {
    setEmail('');
    setNote('');
  };

  const handleCancel = () => {
    resetState();
    updateSubmittedEmail('');
    updateSubmittedNote('');
    changeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubmittedEmail(email);
    updateSubmittedNote(note);
    resetState();
    changeModal();
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
    setShowInvalidEmailMsg(false);
  };

  const changeNote = (e) => {
    setNote(e.target.value);
  };

  const emailValidity = (email) => {
    // For now, this functions just look to see if any data has been entered into the
    // email input field. A better approach would be to use a regular expression
    // to ensure that the input format is correct.
    return email;
  };

  const handleInvalidSubmission = () => {
    setShowInvalidEmailMsg(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form__label">
        Enter email addresses separated by comma
      </label>
      <input
        onChange={changeEmail}
        value={email}
        type="text"
        id="email"
        className="form__email"
        placeholder="email(s)"
      />

      <label className="form__label">Add a note</label>
      <textarea
        onChange={changeNote}
        value={note}
        id="note"
        placeholder="Optional"
        rows="8"
      ></textarea>

      <div className="form__button-group">
        <button
          className="form__cancel-btn"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>

        {/* Prevent form submission unless the user has entered a valid email list. */}
        {emailValidity(email) ? (
          <input
            className="form__submit-btn"
            type="submit"
            value="Share Report"
          />
        ) : (
          <input
            className="form__no-submit-allowed"
            type="button"
            value="Share Report"
            onClick={handleInvalidSubmission}
          />
        )}
      </div>
      {showInvalidEmailMsg ? (
        <div className="form__invalid-email">
          Please enter a valid email or email list
        </div>
      ) : (
        ''
      )}
    </form>
  );
};

export default ReportForm;
