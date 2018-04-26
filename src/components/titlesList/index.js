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
  history: Object,
};

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
    const { history } = this.props;

    return (
      <ul>
        {titlesList.map(({ id, name }) => (
          <TitleItem
            key={id}
            name={id}
            title={name}
            history={history}
          />
        ))}
      </ul>
    );
  }
}


export default withRouter(TitlesList);
