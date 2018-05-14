// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import { Dialog } from 'material-ui';
import { RaisedButton, FlatButton, TextField } from '../../customizedMuiComponents';
import { generateSearchParams, parseSearchParams } from '../../helpers';
import { parameters } from '../../defaults';
import { SourcesList, SelectParam } from './..';
import styles from './styles';

type Props = {
  location: Object,
  history: Object,
  match: Object,
  classes: Object,
}

type State = {
  open: boolean,
  country: string,
}

class Sidebar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      country: parameters.defaultParams.country,
    };
    this.inputTimer = null;
    this.handleChange = this.handleChange.bind(this);
  }


  componentWillMount() {
    this.inputTimer = null;
    const currentParams = parseSearchParams(this.props.location.search, this.props.match.params.countryId);

    this.setState({
      country: currentParams.country,
    });
  }

  handleChange = (event, value) => {
    clearTimeout(this.inputTimer);

    this.inputTimer = setTimeout(() =>
      this.props.history.push(generateSearchParams(this.props.location.search, { q: value })), 500);
  };

  render() {
    const { location, history, match, classes } = this.props;
    const parsedLocation = parseSearchParams(location.search, match.params.countryId);
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={() => this.setState({
          country: match.params.countryId,
          open: false,
        })}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={() => {
          history.push(
            generateSearchParams(
              location.search,
              {
                [parameters.country]: this.state.country || parameters.defaultParams.country,
                [parameters.sources]: '',
              },
              ),
          );
          this.setState({ open: false });
        }}
      />,
    ];

    return (
      <aside className={classes.sidebar}>
        <RaisedButton
          label={parameters.countries[parseSearchParams(this.props.location.search).country]
            || parameters.choose.country}
          keyboardFocused={!this.state.country}
          fullWidth
          onClick={() => this.setState({ open: true })}
        />
        <Dialog
          title={parameters.choose.country}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
          style={{ margin: '0 auto' }}
        >
          <div className={classes['modal-wrapper']}>
            <SelectParam
              choose={parameters.choose.country}
              parameters={parameters.countries}
              defaultValue={this.state.country || parameters.defaultParams.country}
              onChange={(event, index, value) => this.setState({ country: value })}
            />
          </div>
        </Dialog>
        <SelectParam
          choose={parameters.choose.category}
          parameters={parameters.categories}
          defaultValue={Object.keys(parsedLocation).length && parsedLocation.category
            ? parsedLocation.category
            : parameters.defaultParams.category}
          onChange={(event, index, value) =>
            history.push(generateSearchParams(location.search,
              {
                [parameters.category]: value,
                [parameters.sources]: '',
              }))}
        />
        <TextField
          hintText="Search news"
          onChange={this.handleChange}
        />
        <SelectParam
          choose={parameters.choose.pageSize}
          parameters={parameters.pageSizes}
          defaultValue={parsedLocation[parameters.pageSize] || parameters.defaultParams.pageSize}
          onChange={(event, index, value) =>
            history.push(generateSearchParams(
              location.search,
              {
                [parameters.pageSize]: value,
              }))}
          disabled={!parsedLocation.category && !parsedLocation.country}
        />
        <SourcesList />
      </aside>
    );
  }
}

const enhance = compose(
  withRouter,
  injectSheet(styles),
);

export default enhance(Sidebar);
