import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseSearchParams } from '../../enhancers';
import { SelectParam } from './..';
import { parameters } from './../../defaults';

const Header = props => {
  const { location } = props;
  const parsedLocation = parseSearchParams(location.search);

  return (
    <header className="header">
      <SelectParam
        parameterType={parameters.country}
        parameters={parameters.countries}
        defaultValue={Object.keys(parsedLocation).length && parsedLocation.country
          ? parsedLocation.country
          : parameters.defaultParams.country}
      />
      <SelectParam
        parameterType={parameters.category}
        parameters={parameters.categories}
        defaultValue={Object.keys(parsedLocation).length && parsedLocation.category
          ? parsedLocation.category
          : parameters.defaultParams.category}
      />
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Header);
