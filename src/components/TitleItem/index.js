// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import { Checkbox } from 'material-ui';
import styles from './styles';

type Props = {
  name: string,
  title: string,
  classes: Object,
  checkedTitles: Object,
  onChange: Function,
}
const TitleItem = ({ name, title, classes, checkedTitles, onChange }: Props) => (
  <li value={name} className={classes['titles-item']}>
    <Checkbox
      id={name}
      label={title}
      value={name}
      checked={checkedTitles[name]}
      onCheck={event => onChange(event.target.value)}
    />
  </li>
);

export default injectSheet(styles)(TitleItem);
