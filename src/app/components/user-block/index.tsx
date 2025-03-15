import Triangle from '../../../assets/triangle.svg?react';

import './style.scss';

export const UserBlock = () => (
  <div className="user-block">
    <div className="user-block__wrapper">
      <img src="ava.png" alt="User Avatar" />
      <div className="user-block__info">
        <h1 className="user-block__info-name">Kristina 🐰</h1>
        <p className="user-block__info-role">менеджер продаж</p>
      </div>
    </div>

    <button className="expand-button">
      <Triangle className="expand-button-icon" />
    </button>
  </div>
);
