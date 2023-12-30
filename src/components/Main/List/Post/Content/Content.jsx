import PropTypes from 'prop-types';

import style from './Content.module.css';
import {Text} from '../../../../../UI/Text/Text';
import {useState} from 'react';
import {Modal} from '../../../../Modal/Modal';

export const Content = ({id, title, author}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <a
          // As='a'
          className={style.linkPost}
          href='#post'
          size={18}
          // tsize={24}
          // bold
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
        </a>
      </Text>

      <Text
        As='a'
        color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
      {isModalOpen &&
        <Modal title={title} author={author} id={id}
          closeModal={() => {
            setIsModalOpen(false);
          }}/>
      }
    </div>
  );
};


Content.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
