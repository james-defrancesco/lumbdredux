import React, { Component } from 'react';
import { connect } from 'react-redux';
//importing our action
import { toggleMessage } from './actions';
import { getMovies } from '../movies/actions';

import { bindActionCreators } from 'redux';

//stateless functional component
const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
    <div>
      {messageVisibility &&
        <p>Redux is toggled</p>
      }
      {/* dispatch is a function that accepts an object. in this case, an action. */}
        <button onClick={toggleMessage}>Toggle Me</button>
        <button onClick={getMovies}>Load Movies</button>
    </div>
  );


const mapStateToProps = (state) => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
  getMovies,
}, dispatch);

//connecting Toggle to redux store and exporting it
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
