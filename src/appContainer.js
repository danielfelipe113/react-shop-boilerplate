import React, { Component } from 'react';
import { withRouter  } from "react-router-dom";
//components
import Navbar from './common/navbar/navbar';

class AppContainer extends Component {
  constructor(props) {
    //Generic
    super(props);
    this.state = {
      showGoBackButton: false,
      showSidebarButton: false
    };
    //Custom
  }
  
  setNavbarActionButtons(pathname) {    
    let showGoBackButton = pathname !== '/';
    let showSidebarButton = pathname === '/';
    this.setState({
      showGoBackButton,
      showSidebarButton
    });
  }
  
  componentDidMount() {
    this.setNavbarActionButtons(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.setNavbarActionButtons(nextProps.location.pathname);
    }
  }

  componentDidUpdate(prevProps) {
    
  }

  componentWillUnmount() {
    // this.unlistenHistory();
  }
  
  render() {
    return (
      <div>
        <Navbar showGoBackButton={this.state.showGoBackButton} showSidebarButton={this.state.showSidebarButton}/>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(AppContainer);