// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { parseSearchParams } from '../../helpers';
import { parameters } from '../../defaults';
import { TitlesList, SelectParam, RangeParam } from './..';
import styles from './styles';

type Props = {
  location: Object,
  classes: Object,
}

type State = {
  open: boolean,
}

class Sidebar extends React.Component<Props, State> {
  state = {
    open: false,
  };
  render() {
    const { location, classes } = this.props;
    const parsedLocation = parseSearchParams(location.search);
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={() => this.setState({ open: false })}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={() => this.setState({ open: false })}
      />,
    ];

    return (
      <aside className={classes.sidebar}>
        <RaisedButton label={parameters.choose.country} onClick={() => this.setState({ open: true })} />
        <Dialog
          title={parameters.choose.country}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
        >
          <SelectParam
            choose={parameters.choose.country}
            parameterType={parameters.country}
            parameters={parameters.countries}
            defaultValue={Object.keys(parsedLocation).length && parsedLocation.country
              ? parsedLocation.country
              : parameters.defaultParams.country}
          />
        </Dialog>
        <SelectParam
          choose={parameters.choose.category}
          parameterType={parameters.category}
          parameters={parameters.categories}
          defaultValue={Object.keys(parsedLocation).length && parsedLocation.category
            ? parsedLocation.category
            : parameters.defaultParams.category}
        />
        <RangeParam
          min={parameters.pageSize.min}
          max={parameters.pageSize.max}
          step={parameters.pageSize.step}
          defaultValue={parameters.pageSize.defaultValue}
          disabled={!location.search}
        />
        <TitlesList />
      </aside>
    );
  }
}

export default withRouter(injectSheet(styles)(Sidebar));
