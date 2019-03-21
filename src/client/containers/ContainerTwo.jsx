import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class ContainerTwo extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container-two">
        <h1>Container Two</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTwo);
