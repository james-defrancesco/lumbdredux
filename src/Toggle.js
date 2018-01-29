import React, { Component } from 'react';
import { connect } from 'react-redux';
//importing our action
import { toggleMessage } from './actions';

import { bindActionCreators } from 'redux';

//stateless functional component
const Toggle = ({ messageVisibility, toggleMessage }) => (
    <div>
      {messageVisibility &&
        <p>You will see this if redux is toggled</p>
      }
      {/* dispatch is a function that accepts an object. in this case, an action. */}
        <button onClick={toggleMessage}>Toggle Me</button>
    </div>
  );


const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
}, dispatch);

//connecting Toggle to redux store and exporting it
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
