import {useContext} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text/Text';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';


export const FormComment = () => {
  const {auth} = useContext(authContext);

  const dispatch = useDispatch();
  const value = useSelector(state => state.comment);

  const handlerSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
        placeholder='Введите комментарий...' />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
