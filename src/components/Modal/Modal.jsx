import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import style from './Modal.module.css';

import {ReactComponent as CloseIcon} from './img/close.svg';

export const Modal = ({title, author}) =>
  ReactDOM.createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>content</div>
        <p className={style.author}>{author}</p>

        <button className={style.close}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'));


Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
