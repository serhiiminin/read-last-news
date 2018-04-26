// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { parameters } from '../../defaults';
import { parseSearchParams } from '../../enhancers';
import { api } from '../../helpers';
import { TitleItem } from './..';

type State = {
  titlesList: Array<Object>
};

type Props = {
  location: Object,
};

const isCountry = 'sd';

class TitlesList extends React.Component<Props, State> {
  state = {
    titlesList: [],
  };
  componentDidMount() {
    const initRequest = parseSearchParams(this.props.location.search);

    api({ country: 'us' }, parameters.typeData.sources)
      .then(({ sources }) => this.setState({ titlesList: sources }, console.log(sources)));
  }
  componentWillReceiveProps(nextProps) {

  }
  render() {
    const { titlesList } = this.state;

    return (
      <ul>
        {titlesList.map(({ id, name }) => (
          <TitleItem
            key={id}
            name={id}
            title={name}
          />
        ))}
      </ul>
    );
  }
}


export default withRouter(TitlesList);
