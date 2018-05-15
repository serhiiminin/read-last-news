// @flow

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
};

const getAllActiveTitles = titles =>
  Object.entries(titles)
    .filter(([, value]) => !!value)
    .map(([key]) => key)
    .join(',');

class SourcesList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      sourcesList: [],
      checkedSources: {},
    };
  }

  componentDidMount() {
    this.renderSources(this.props.location.search);
  }

  componentDidUpdate(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.renderSources(nextProps.location.search);
    }
  }

  _handleOnChange = (title: String) =>
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
      });
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
                    checkedTitles={checkedSources}
                    onChange={this._handleOnChange}
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
