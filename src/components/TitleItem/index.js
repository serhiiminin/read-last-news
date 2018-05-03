// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import { Checkbox } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { variables } from '../../styles';
import styles from './styles';

type Props = {
  name: string,
  title: string,
  classes: Object,
  checkedTitles: Object,
  onChange: Function,
}

const muiTheme = getMuiTheme({
  menuItem: {
    checkedColor: variables.colors.blue,
  },
});

const TitleItem = ({ name, title, classes, checkedTitles, onChange }: Props) => (
  <li value={name} className={classes['titles-item']}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Checkbox
        id={name}
        label={title}
        value={name}
        checked={checkedTitles[name]}
        onCheck={event => onChange(event.target.value)}
      />
    </MuiThemeProvider>
  </li>
);

export default injectSheet(styles)(TitleItem);
