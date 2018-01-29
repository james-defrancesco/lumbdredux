import React, { Component } from 'react';
import { connect } from 'react-redux';
//importing our action
import { toggleMessage } from './actions';

import { bindActionCreators } from 'redux';

//stateless functional component
<<<<<<< HEAD
const Toggle = ({ messageVisibility, toggleMessage }) => (
=======
const Toggle = ({ messageVisibility, dispatch }) => (
>>>>>>> b3196321a3bce845858c1a2bdb51e56945f100ae
    <div>
      {messageVisibility &&
        <p>You will see this if redux is toggled</p>
      }
      {/* dispatch is a function that accepts an object. in this case, an action. */}
<<<<<<< HEAD
        <button onClick={toggleMessage}>Toggle Me</button>
=======
        <button onClick={() => dispatch({
          type: 'TOGGLE_MESSAGE',
        })}>Toggle Me</button>
>>>>>>> b3196321a3bce845858c1a2bdb51e56945f100ae
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
