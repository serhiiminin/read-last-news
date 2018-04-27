// @flow

import * as React from 'react';

type Props = {
  name: string,
  title: string,
  history: Object,
}
const TitleItem = ({ name, title, history }: Props) => (
  <li value={name}>
    <input
      id={name}
      type="checkbox"
      name={name}
      onChange={e => history.push(e.target.name)}
    />
    <label htmlFor={name}>{title}</label>
  </li>
);

export default TitleItem;
