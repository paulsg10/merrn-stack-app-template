import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class ContainerThree extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container-three">
        <h1>Container Three</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerThree);
