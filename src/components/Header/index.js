// @flow

import React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { parseSearchParams } from '../../helpers';
import { parameters } from '../../defaults';
import { Status } from './..';
import styles from './styles';

type Props = {
  classes: Object,
  location: Object,
  match: Object,
}
const Header = (props: Props) => {
  const { classes, location, match } = props;
  const parsedUrl = parseSearchParams(location.search, match.params.countryId);
  const countryName = parsedUrl.country || parameters.defaultParams.country;

  return (
    <header className={classes.header}>
      <h1>
        <Link to="/" className={classes.link}>Read last news</Link>
      </h1>
      <Status>{parameters.countries[countryName]}</Status>
    </header>
  );
};

const enhance = compose(
  withRouter,
  injectSheet(styles),
);

export default enhance(Header);
