import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

import style from './Modal.module.css';

import {ReactComponent as CloseIcon} from './img/close.svg';

import {useCommentsData} from '../../hooks/useCommentsData';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const [post, comments, loading] = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current || e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return (
    ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal} >
          {loading ? <p>Loading...</p> :
            <>
              <h2 className={style.title}>{post[0].title}</h2>

              <div className={style.content}>
                <Markdown options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}>
                  {post[0].selftext}
                </Markdown>
              </div>

              <p className={style.author}>{post[0].author}</p>

              <Comments comments={comments}/>
              <FormComment />
            </>
          }

          <button className={style.close} onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root'))
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
