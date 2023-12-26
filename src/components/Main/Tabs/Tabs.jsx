import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import style from './Tabs.module.css';

import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as Hot} from './img/hot.svg';
import {Text} from '../../../UI/Text/Text';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: Hot},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRasize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleRasize);
    debounceResize();

    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedItem ? selectedItem.value : 'Главная'}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) &&
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <Text
                As={'button'}
                className={style.btn}
                onClick={() => handleItemClick({value, id, Icon})}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </Text>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array
};
