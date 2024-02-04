import React from 'react';
import EmailCorrection from '../EmailCorrection/EmailInput'
import './EmailCorrectionPage.css'

const EmailCorrectionPage = () => {
  return (
    <div className = "full-body-container-email">
      <div className = "email-correct">
      <EmailCorrection />
      </div>
    </div>
  );
};

export default EmailCorrectionPage;
