import React, { useState } from 'react';
import "./UserPage.css"
import NavLink from '../NavLink/NavLink';
import CircleButton from '../CircleButton/CircleButton';
import { BsPersonCircle } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate();
  return (
    <div className="full-body-container-user">
       <div className = "links">
        <NavLink href = "/emailCorrection" title = "Email"/>
        <NavLink href = "/forum" title = "Forum"/>
        <CircleButton onClick= {() => navigate('/user')} buttonType={BsPersonCircle}/>
      </div>
      <div className = "buttonPairs-user">
       <Button className = "button">Spotlight</Button>
       <Button className = "button">Contact</Button>
      </div>
    </div>
  );
};

export default UserPage;