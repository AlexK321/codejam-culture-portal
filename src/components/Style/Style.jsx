import React from 'react';
import './style.css';

function Style() {
    return (
      <React.Fragment>
        <div>
          <h2 className="title">Гид по стилю</h2>
          <ul className="list">
            <li>В проекте используется Material-UI.</li>
            <li>Проект полностью соответствует концепции Responsive Web Design.</li>
            <li>Проект соответствует основным требованиям типографского дизайна.</li>
          </ul>
        </div>
      </React.Fragment>
    );
}

export default Style;
