import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Text.module.css';

export const Text = (prop) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    medium,
    bold,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
    {[style.center]: center},
    {[style.medium]: medium},
    {[style.bold]: bold},
  );

  return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bool,
};
