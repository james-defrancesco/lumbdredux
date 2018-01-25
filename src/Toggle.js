import React, { Component } from 'react';
import { connect } from 'react-redux';

//stateless functional component
const Toggle = ({ messageVisibility, dispatch }) => (
    <div>
      {messageVisibility &&
        <p>You will see this if redux is toggled</p>
      }
      {/* dispatch is a function that accepts an object. in this case, an action. */}
        <button onClick={() => dispatch({
          type: 'TOGGLE_MESSAGE',
        })}>Toggle Me</button>
      </div>
  );


const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
});

//connecting Toggle to redux store and exporting it
export default connect(mapStateToProps)(Toggle);
