import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMessage } from '../../api/home';
import Header from './components/header';
import Feedback from './components/feedback';
import Project from './components/project';
import SupportUs from './components/supportUs';

function Home({ message, status, requestMessage }) {
  useEffect(() => {
    requestMessage();
  }, []);

  return (
    <div>
      { status === 'READY'
        && (
        <div className="py-20 px-6 space-y-32">
          <Header />
          <Feedback />
          <Project />
          <SupportUs />
          { console.log(message) }
        </div>
        )}
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
