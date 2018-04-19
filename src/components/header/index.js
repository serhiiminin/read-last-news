import React from 'react';
import { SelectParam } from './..';
import { parameters } from './../../defaults';

const Header = () => (
  <header className="header">
    <SelectParam
      parameterType={parameters.country}
      parameters={parameters.countries}
      defaultValue="us"
    />
    <SelectParam
      parameterType={parameters.category}
      parameters={parameters.categories}
      defaultValue="business"
    />
  </header>
);

export default Header;
