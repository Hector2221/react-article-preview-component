import React from 'react';
import '../style/card.css';
import { IconsCard } from './BtnIcons'


import avatar from '../assets/avatar-michelle.jpg';

function Card() {

  return (
    <div className='card'>
      <div className='card-img'></div>
      <div className="describe-card">
        <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        <div className="user">
            <div className="user-info">
              <img className="img-user" src={avatar} alt="" />
              <div className="name-user">
                <h3>Michelle Appleton</h3>
                <p>28 Jun 2020</p>
              </div>
            </div>
            <IconsCard/>
        </div>
      </div>
    </div>
  );
}

export { Card };