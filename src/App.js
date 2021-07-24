import React from 'react';

import { ModalProvider } from './components/contexts/ModalContext';
import { ReportProvider } from './components/contexts/ReportContext';
import { MainPage } from './components/mainPage/mainPage.component';

const App = () => {
  return (
    <div className="App">
      <ModalProvider>
        <ReportProvider>
          <MainPage />
        </ReportProvider>
      </ModalProvider>
    </div>
  );
};

export default App;
