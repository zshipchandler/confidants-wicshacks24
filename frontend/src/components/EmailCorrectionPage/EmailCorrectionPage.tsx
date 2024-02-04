import React from 'react';
import EmailCorrection from '../EmailCorrection/EmailInput'
import './EmailCorrectionPage.css'
import NavLink from '../NavLink/NavLink';

const EmailCorrectionPage = () => {
  return (
    <div className = "full-body-container-email">
      <div className = "links">
        <NavLink href = "/emailCorrection" title = "Email"/>
        <NavLink href = "/forum" title = "Forum"/>
      </div>
      
      <div className = "email-correct">
      <EmailCorrection />
      </div>
    </div>
  );
};

export default EmailCorrectionPage;
