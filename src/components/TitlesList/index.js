// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { parameters } from '../../defaults';
import { generateSearchParams, parseSearchParams, api } from '../../helpers';
import { TitleItem } from './..';
import styles from './styles';

type State = {
  titlesList: Array<Object>,
  checkedTitles: Object,
};

type Props = {
  location: Object,
  history: Object,
  match: Object,
  classes: Object,
};

const getAllActiveTitles = titles =>
  Object.entries(titles)
    .filter(([, value]) => !!value)
    .map(([key]) => key)
    .join(',');

class TitlesList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      titlesList: [],
      checkedTitles: {},
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const initRequest = parseSearchParams(this.props.location.search, this.props.match.params.countryId);

    api(initRequest, parameters.typeData.sources)
      .then(({ sources }) => {
        this.setState({ titlesList: sources });
        return sources;
      })
      .then(titles => Object.assign({}, ...titles.map(({ id }) => ({ [id]: false }))))
      .then(titles => this.setState({ checkedTitles: titles }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search
      || this.props.match.params.countryId !== nextProps.match.params.countryId) {
      api(parseSearchParams(nextProps.location.search, this.props.match.params.countryId), parameters.typeData.sources)
        .then(({ sources }) => this.setState({ titlesList: sources }));
    }
  }

  handleOnChange = (title: String) =>
    this.setState({
      checkedTitles: {
        ...this.state.checkedTitles,
        [title]: !this.state.checkedTitles[title],
      },
    }, () => {
      this.props.history.push(
        generateSearchParams(this.props.location.search,
          { [parameters.typeData.sources]: getAllActiveTitles(this.state.checkedTitles) }));
    },
    );

  render() {
    const { titlesList, checkedTitles } = this.state;
    const { classes } = this.props;

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
                    checkedTitles={checkedTitles}
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

export default withRouter(injectSheet(styles)(TitlesList));
