import {useRef} from 'react';
import style from './FormComment.module.css';

export const FormComment = () => {
  const commentRef = useRef(null);

  const handlerSubmit = e => {
    e.preventDefault();
    console.log(commentRef.current.value);
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <textarea className={style.textarea} ref={commentRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
