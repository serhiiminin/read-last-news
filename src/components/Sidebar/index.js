// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import { Dialog, DialogContent, DialogActions, DialogTitle } from 'material-ui';
import { Button, TextField, Radio, RadioGroup } from '../../customizedMuiComponents';
import { generateSearchParams, parseSearchParams } from '../../helpers';
import { parameters } from '../../defaults';
import { SourcesList, SelectParam, NotificationsContext } from './..';
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
  input: string,
};

const INPUT_TIMEOUT = 500;

class Sidebar extends React.Component<Props, State> {
  inputTimer: TimeoutID

  state = {
    open: false,
    country: parameters.defaultParams.country,
    input: '',
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

    this.inputTimer = setTimeout(() => {
      this.setState({
        input: target.value,
      });
      this.props.history.push(
        generateSearchParams(this.props.location.search, { q: target.value }),
      );
    }, INPUT_TIMEOUT);
  };

  render() {
    const { location, history, match, classes } = this.props;
    const parsedLocation = parseSearchParams(location.search, match.params.countryId);
    const paramsCountries: Array<[string, mixed]> = Object.entries(parameters.countries);

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
            defaultValue={this.state.input}
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
            onChange={event => (
              history.push(generateSearchParams(
                location.search,
                {
                  [parameters.pageSize]: event.target.value,
                })))
            }
            disabled={!parsedLocation.category && !parsedLocation.country}
          />
        </div>
        <NotificationsContext.Consumer>
          {notifications => (
            <SourcesList showNotification={notifications.showNotification} />
          )}
        </NotificationsContext.Consumer>
        <Dialog
          fullWidth
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <DialogTitle id="choose-country">{parameters.choose.country}</DialogTitle>
          <DialogContent>
            <RadioGroup
              name={this.state.country}
              aria-label={this.state.country}
              value={this.state.country || parameters.defaultParams.country}
              onChange={(event, value) => this.setState({ country: value })}
            >
              {paramsCountries.map(([key, value]) => (
                <Radio
                  value={key}
                  label={value}
                  key={key}
                />
              ))}
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button
              primary="true"
              onClick={() => this.setState((prevState: Object) => ({
                country: prevState.country,
                open: false,
              }))}
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
