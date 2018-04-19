import React from 'react';
import { SelectParam } from './..';
import { parameters } from './../../defaults';

const Header = () => (
  <header className="header">
    <SelectParam parameters={parameters.countries} />
    <SelectParam parameters={parameters.categories} />
  </header>
);

export default Header;
