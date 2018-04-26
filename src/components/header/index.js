// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseSearchParams } from '../../enhancers';
import { SelectParam, RangeParam } from './..';
import { parameters } from './../../defaults';

type Props = {
  location: Object,
}

const Header = (props: Props) => {
  const { location } = props;
  const parsedLocation = parseSearchParams(location.search);

  return (
    <header className="header">
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
      />
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Header);
