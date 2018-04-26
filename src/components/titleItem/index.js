// @flow

import * as React from 'react';

type Props = {
  name: string,
  title: string,
}
const TitleItem = ({ name, title }: Props) => (
  <li value={name}>
    <input id={name} type="checkbox" name={name} />
    <label htmlFor={name}>{title}</label>
  </li>
);

export default TitleItem;
