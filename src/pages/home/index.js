import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMessage } from '../../api/home';
import Header from './components/header';
import SupportUs from './components/supportUs';
import Image from '../../assets/CiteBot.png';
import Subheader from './components/subheader';

function Home({ message, status, requestMessage }) {
  useEffect(() => {
    requestMessage();
  }, []);

  const subheaders = [
    {
      title: 'Feedback',
      message: 'Get immediate feedback while building your citation across all edge cases.',
      source: Image,
    },
    {
      title: 'Project',
      message: 'Save citations to projects and edit them in the future. Never lose a citation again!',
      source: Image,
      reverse: true,
    },
    {
      title: 'Pricing',
      message: 'CitationApp is 100% free to use with no ads.',
      source: Image,
    },
  ];

  return (
    <div>
      { status === 'READY'
        && (
        <div className="py-20 px-6 space-y-32">
          <Header />
          {subheaders.map((sub) => <Subheader {...sub} />)}
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
