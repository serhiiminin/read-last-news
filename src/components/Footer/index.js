import React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import styles from './styles';

type Props = {
  classes: Object,
}
const Footer = ({ classes }: Props) => (
  <div className={classes.footer}>Footer</div>
);

const enhance = compose(
  injectSheet(styles),
);

export default enhance(Footer);
