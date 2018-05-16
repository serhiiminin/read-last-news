// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { Checkbox } from './../../customizedMuiComponents';
import styles from './styles';

type Props = {
  name: string,
  title: string,
  classes: Object,
  checked: boolean,
  onChange: Function,
}

const SourcesItem = ({ name, title, classes, checked, onChange }: Props) => (
  <li value={name} className={classes.titlesItem}>
    <Checkbox
      id={name}
      label={title}
      value={name}
      checked={checked}
      onChange={event => onChange(event.target.value)}
    />
  </li>
);

const enhance = compose(
  injectSheet(styles),
);

export default enhance(SourcesItem);
