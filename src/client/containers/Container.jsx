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

class Container extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="Container">
        <Example />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
