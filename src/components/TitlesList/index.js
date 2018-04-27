// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { parameters } from '../../defaults';
import { parseSearchParams } from '../../enhancers';
import { api } from '../../helpers';
import { TitleItem } from './..';
import styles from './styles';

type State = {
  titlesList: Array<Object>
};

type Props = {
  location: Object,
  history: Object,
  classes: Object,
};

class TitlesList extends React.Component<Props, State> {
  state = {
    titlesList: [],
  };
  componentDidMount() {
    const initRequest = parseSearchParams(this.props.location.search);

    api(initRequest, parameters.typeData.sources)
      .then(({ sources }) => this.setState({ titlesList: sources }));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      api(parseSearchParams(nextProps.location.search), parameters.typeData.sources)
        .then(({ sources }) => this.setState({ titlesList: sources }));
    }
  }
  render() {
    const { titlesList } = this.state;
    const { history, classes } = this.props;

    return (
      <React.Fragment>
        <h3>Sources</h3>
        {
          !titlesList.length
            ? <div>Empty</div>
            : (
              <ul className={classes['titles-list']}>
                {titlesList.map(({ id, name }) => (
                  <TitleItem
                    key={id}
                    name={id}
                    title={name}
                    history={history}
                  />
                ))}
              </ul>
            )
        }
      </React.Fragment>
    );
  }
}


export default withRouter(injectSheet(styles)(TitlesList));
