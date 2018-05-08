import React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import styles from './styles';

type Props = {
  classes: Object,
}
const Footer = ({ classes }: Props) => (
  <footer className={classes.footer}>
    <h4>Contact me:</h4>
    <p>minin.serhii@gmail.com</p>
  </footer>
);

const enhance = compose(
  injectSheet(styles),
);

export default enhance(Footer);
