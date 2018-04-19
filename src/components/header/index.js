import React from 'react';
import { SelectParam } from './..';
import { parameters } from './../../defaults';

const Header = () => (
  <header className="header">
    <SelectParam
      parameters={parameters.countries}
      defaultValue="us"
    />
    <SelectParam
      parameters={parameters.categories}
      defaultValue="business"
    />
  </header>
);

export default Header;
