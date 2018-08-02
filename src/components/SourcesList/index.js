// @flow

import PropTypes from 'prop-types';
import * as React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { parameters } from '../../defaults';
import { generateSearchParams, parseSearchParams, api } from '../../helpers';
import { SourcesItem } from './..';
import styles from './styles';

type State = {
  sourcesList: Array<Object>,
  checkedSources: Object,
};

type Props = {
  location: Object,
  history: Object,
  classes: Object,
  showNotification: Function,
};

const getAllActiveTitles = titles =>
  Object.entries(titles)
    .filter(([, value]) => !!value)
    .map(([key]) => key)
    .join(',');

class SourcesList extends React.Component<Props, State> {
  static propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    showNotification: PropTypes.func.isRequired,
  };

  state = {
    sourcesList: [],
    checkedSources: {},
  };

  componentDidMount() {
    this.renderSources(this.props.location.search);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.location.search !== prevProps.location.search) {
      this.renderSources(this.props.location.search);
    }
  }

  handleOnChange = title =>
    this.setState({
      checkedSources: {
        ...this.state.checkedSources,
        [title]: !this.state.checkedSources[title],
      },
    }, () => {
      this.props.history.push(
        generateSearchParams(this.props.location.search,
          { [parameters.typeData.sources]: getAllActiveTitles(this.state.checkedSources) }));
    },
    );

  renderSources = (search: String) => {
    const parsedSearchParams = parseSearchParams(search);
    const initRequest = {};

    if (parsedSearchParams[parameters.country]) initRequest.country = parsedSearchParams[parameters.country];
    if (parsedSearchParams[parameters.category]) initRequest.category = parsedSearchParams[parameters.category];

    return api(initRequest, parameters.typeData.sources)
      .then(({ sources }) => {
        this.setState({ sourcesList: sources });
        return sources;
      })
      .then(titles => {
        const parsedSourcesFromUrl = parseSearchParams(this.props.location.search)[parameters.sources] &&
          parseSearchParams(this.props.location.search)[parameters.sources].split(',');
        const checkedSources = Object.assign({},
          ...titles.map(({ id }) =>
            ({ [id]: parsedSourcesFromUrl ? parsedSourcesFromUrl.some(source => source === id) : false })));

        this.setState({ checkedSources });

        return checkedSources;
      })
      .catch(error => this.props.showNotification(error));
  };
  render() {
    const { sourcesList, checkedSources } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h3>Sources</h3>
        {
          !sourcesList.length
            ? <div className={classes['titles-empty']}>Empty</div>
            : (
              <ul className={classes['titles-list']}>
                {sourcesList.map(({ id, name }) => (
                  <SourcesItem
                    key={id}
                    name={id}
                    title={name}
                    checked={checkedSources[id]}
                    onChange={this.handleOnChange}
                  />
                ))}
              </ul>
            )
        }
      </React.Fragment>
    );
  }
}

const enhance = compose(
  withRouter,
  injectSheet(styles),
);

export default enhance(SourcesList);
