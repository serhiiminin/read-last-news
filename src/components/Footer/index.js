import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

type Props = {
  classes: Object,
}
const Footer = ({ classes }: Props) => (
  <div className={classes.footer}>Footer</div>
);

export default injectSheet(styles)(Footer);
