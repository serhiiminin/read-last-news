// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import { Dialog, DialogContent, DialogActions } from 'material-ui';
import { Button, TextField } from '../../customizedMuiComponents';
import { generateSearchParams, parseSearchParams } from '../../helpers';
import { parameters } from '../../defaults';
import { SourcesList, SelectParam } from './..';
import styles from './styles';

type Props = {
  location: Object,
  history: Object,
  match: Object,
  classes: Object,
};

type State = {
  open: boolean,
  country: string,
};

const INPUT_TIMEOUT = 500;

class Sidebar extends React.Component<Props, State> {
  inputTimer: TimeoutID

  state = {
    open: false,
    country: parameters.defaultParams.country,
  };

  componentDidMount() {
    const currentParams = parseSearchParams(this.props.location.search, this.props.match.params.countryId);

    this.setState({
      country: currentParams.country,
    });
  }

  componentWillUnmount() {
    clearTimeout(this.inputTimer);
  }

  _handleInputChange = event => {
    clearTimeout(this.inputTimer);
    const { target }: Object = event;

    this.inputTimer = setTimeout(() =>
      this.props.history.push(
        generateSearchParams(this.props.location.search, { q: target.value }),
      ), INPUT_TIMEOUT);
  };

  render() {
    const { location, history, match, classes } = this.props;
    const parsedLocation = parseSearchParams(location.search, match.params.countryId);

    return (
      <aside className={classes.sidebar}>
        <Button
          focusRipple={!this.state.country}
          variant="raised"
          fullWidth
          onClick={() => this.setState({ open: true })}
        >{parameters.countries[parseSearchParams(this.props.location.search).country]
          || parameters.choose.country}
        </Button>
        <div className={classes.sidebarParamWrapper}>
          <TextField
            label="Search news"
            onChange={this._handleInputChange}
          />
        </div>
        <div className={classes.sidebarParamWrapper}>
          <SelectParam
            choose={parameters.choose.category}
            parameters={parameters.categories}
            defaultValue={Object.keys(parsedLocation).length && parsedLocation.category
              ? parsedLocation.category
              : parameters.defaultParams.category}
            onChange={event =>
              history.push(generateSearchParams(location.search,
                {
                  [parameters.category]: event.target.value,
                  [parameters.sources]: '',
                }))}
          />
        </div>
        <div className={classes.sidebarParamWrapper}>
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
        </div>
        <SourcesList />
        <Dialog
          title={parameters.choose.country}
          modal="false"
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          fullWidth
        >
          <DialogContent>
            <div className={classes.modalWrapper}>
              <SelectParam
                choose={parameters.choose.country}
                parameters={parameters.countries}
                defaultValue={this.state.country || parameters.defaultParams.country}
                onChange={event => this.setState({ country: event.target.value })}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              primary="true"
              onClick={() => this.setState({
                country: match.params.countryId,
                open: false,
              })}
            >Cancel
            </Button>
            <Button
              primary="true"
              focusRipple
              onClick={() => {
                history.push(generateSearchParams(
                    location.search,
                    { [parameters.country]: this.state.country || parameters.defaultParams.country,
                      [parameters.sources]: '' }));
                this.setState({ open: false });
              }}
            >Submit
            </Button>
          </DialogActions>
        </Dialog>
      </aside>
    );
  }
}

const enhance = compose(
  withRouter,
  injectSheet(styles),
);

export default enhance(Sidebar);
