import React, { Component } from 'react';
import './home.css';
//components
import UsersList from '../users/users.list';
import Navbar from '../common/navbar/navbar'

class Home extends Component {
  constructor(props) {
    //Generic
    super(props);
    this.state = {
      users: []
    };
    //Custom
    this.apiUrl = 'https://randomuser.me/api/?results=5';
  }

  componentDidMount() {
   
  }
  
  render() {
    return (
      <div>
        <div className="home--container">
          <div className="jumbotron" style={{'marginTop': '15px'}}>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
          
          <UsersList/>
        </div>
      </div>
    );
  }
}

export default Home;
