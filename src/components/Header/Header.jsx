import React from "react";
import "./Header.scss";

import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__hero">
          <img
            className="header__img"
            src="data:image/png;base64,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"
            alt=""
          />
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">Uz</li>
              <li className="header__item">|</li>
              <li className="header__item">Ru</li>
            </ul>
            <button className="header__btn">
              <FiMessageCircle />
              Сообшенияnpm 
            </button>
            <button className="header__btn">
              <FiHeart />
            </button>
            <button className="header__btn">
              <FiUser />
              Ваш профил
            </button>

            <button className="header__btn_call">
              <p>Подать объявление</p>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
