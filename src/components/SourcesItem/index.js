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
  checkedTitles: Object,
  onChange: Function,
}

const SourcesItem = ({ name, title, classes, checkedTitles, onChange }: Props) => (
  <li value={name} className={classes['titles-item']}>
    <Checkbox
      id={name}
      label={title}
      value={name}
      checked={checkedTitles[name]}
      onChange={event => onChange(event.target.value)}
    />
  </li>
);

const enhance = compose(
  injectSheet(styles),
);

export default enhance(SourcesItem);
