import React from 'react';
import PropTypes from 'prop-types';

export default class MedFileRequest extends React.Component {
  render() {
    return (
      <div>
        <p>Request med file:</p>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}
