import React, { Component } from 'react';
import { connect } from 'react-redux';

//stateless functional component
const Toggle = ({ messageVisibility }) => (
    <div>
      {messageVisibility &&
        <p>You will see this if redux is toggled</p>
      }
        <button>Toggle Me</button>
      </div>
  );


const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
});

//connecting Toggle to redux store and exporting it
export default connect(mapStateToProps)(Toggle);
