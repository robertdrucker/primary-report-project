import React, { createContext, useState } from 'react';

export const ReportContext = createContext();

export function ReportProvider(props) {
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submittedNote, setSubmittedNote] = useState('');
  const updateSubmittedEmail = (email) => setSubmittedEmail(email);
  const updateSubmittedNote = (note) => setSubmittedNote(note);
  return (
    <ReportContext.Provider
      value={{
        submittedEmail,
        submittedNote,
        updateSubmittedEmail,
        updateSubmittedNote,
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
}
