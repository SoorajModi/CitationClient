import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMessage } from '../../api/home';

function Home({ message, status, requestMessage }) {
  useEffect(() => {
    requestMessage();
  }, []);

  return (
    <div className="text-5xl">
      { status === 'READY' && message }
      { status === 'FAILED' && 'Error' }
      { status === 'PENDING' && 'Loading...' }
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.home.message,
  status: state.home.status,
});

const mapDispatchToProps = (dispatch) => ({
  requestMessage: bindActionCreators(getMessage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
