// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import Dialog from 'material-ui/Dialog';
import { RaisedButton, FlatButton } from '../../customizedMuiComponents';
import { generateSearchParams, parseSearchParams } from '../../helpers';
import { parameters } from '../../defaults';
import { TitlesList, SelectParam, RangeParam } from './..';
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
  state = {
    open: false,
    country: parameters.defaultParams.country,
  };

  componentWillMount() {
    const currentParams = parseSearchParams(this.props.location.search, this.props.match.params.countryId);

    this.setState({
      country: currentParams.country,
    });
  }

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
          label={parameters.choose.country}
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
          disabled={!parsedLocation.country}
        />
        <RangeParam
          min={parameters.pageSize.min}
          max={parameters.pageSize.max}
          step={parameters.pageSize.step}
          defaultValue={parameters.pageSize.defaultValue}
          disabled={!location.search && !match.params.countryId}
        />
        <TitlesList />
      </aside>
    );
  }
}

const enhance = compose(
  withRouter,
  injectSheet(styles),
);

export default enhance(Sidebar);
