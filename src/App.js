import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// import { AsyncStorage } from 'react-native';
import createNavigator from './routes';
import NavigationService from './services/navigation';

class App extends Component {
  // Testar Logout de Usuário
  // async componentDidMount() {
  //   AsyncStorage.clear();
  // }

  static propTypes = {
    auth: PropTypes.shape({
      authChecked: PropTypes.bool,
      signedIn: PropTypes.bool,
    }).isRequired,
  };

  registerService = (ref) => {
    NavigationService.setTopLevelNavigatior(ref);
  };

  render() {
    const { auth } = this.props;

    if (!auth.authChecked) return null;

    const Routes = createNavigator(auth.signedIn);

    return <Routes ref={this.registerService} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
