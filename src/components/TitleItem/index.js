// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

type Props = {
  name: string,
  title: string,
  history: Object,
  classes: Object,
}
const TitleItem = ({ name, title, history, classes }: Props) => (
  <li value={name} className={classes['titles-item']}>
    <input
      id={name}
      type="checkbox"
      name={name}
      onChange={e => history.push(e.target.name)}
    />
    <label htmlFor={name}>{title}</label>
  </li>
);

export default injectSheet(styles)(TitleItem);
