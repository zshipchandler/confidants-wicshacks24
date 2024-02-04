import React from 'react';
import EmailCorrection from '../EmailCorrection/EmailInput'
import './EmailCorrectionPage.css'
import NavLink from '../NavLink/NavLink';
import CircleButton from '../CircleButton/CircleButton';
import { BsPersonCircle } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EmailCorrectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className = "full-body-container-email">
      <div className = "links">
        <NavLink href = "/emailCorrection" title = "Email"/>
        <NavLink href = "/forum" title = "Forum"/>
        <CircleButton onClick= {() => navigate('/user')} buttonType={BsPersonCircle}/>
      </div>
      <div className = "email-correct">
      <EmailCorrection />
      </div>
      <div className = "buttonPairs">
       <Button className = "button">Spotlight</Button>
       <Button className = "button">Contact</Button>
      </div>
    </div>
  );
};

export default EmailCorrectionPage;
