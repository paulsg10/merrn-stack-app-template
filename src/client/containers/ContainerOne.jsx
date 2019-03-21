import React, { Component } from 'react';
import { connect } from 'react-redux';
import Example from '../components/Example';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  sample: store.sampleReducer.sample,
});

const mapDispatchToProps = dispatch => ({
  actionType: (action) => {
    dispatch(actions.actionType(action));
  },
});

class ContainerOne extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container-one">
        <Example />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerOne);
