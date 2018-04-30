// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import { parameters } from '../../defaults';
import { parseSearchParams } from '../../enhancers';
import { TitlesList, SelectParam, RangeParam } from './..';
import styles from './styles';

type Props = {
  location: Object,
  classes: Object,
}

const Sidebar = (props: Props) => {
  const { location, classes } = props;
  const parsedLocation = parseSearchParams(location.search);

  return (
    <aside className={classes.sidebar}>
      <SelectParam
        choose={parameters.choose.country}
        parameterType={parameters.country}
        parameters={parameters.countries}
        defaultValue={Object.keys(parsedLocation).length && parsedLocation.country
          ? parsedLocation.country
          : parameters.defaultParams.country}
      />
      <SelectParam
        choose={parameters.choose.category}
        parameterType={parameters.category}
        parameters={parameters.categories}
        defaultValue={Object.keys(parsedLocation).length && parsedLocation.category
          ? parsedLocation.category
          : parameters.defaultParams.category}
      />
      <RangeParam
        min={parameters.pageSize.min}
        max={parameters.pageSize.max}
        step={parameters.pageSize.step}
        defaultValue={parameters.pageSize.defaultValue}
        disabled={!location.search}
      />
      <TitlesList />
    </aside>
  );
};

export default withRouter(injectSheet(styles)(Sidebar));
