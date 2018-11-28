import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsersList extends Component {
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
    fetch(this.apiUrl)
      .then(data => {
        return data.json();
      })
      .then(data => {
        let users = data.results.map(user => {
          return (
            <div className="col-sm-3" style={{'margin': '4px 0'}}>
              <div className="card">
                <img className="card-img-top" src={user.picture.large}/>
                <div className="card-body">
                    <h5 className="card-title" style={{'textTransfrom': 'capitalize'}}>{user.name.title + user.name.first + user.name.last}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/users/${user.name.first}`} className="btn btn-primary">
                        Hire
                    </Link>
                </div>
              </div>
            </div>
          )
        });
        this.setState({users});
      })
      .catch(err => {
        console.error('Yikes! ', err)
      })
  }
  
  render() {
    return (
        <div className="container-fluid d-inline-flex justify-content-left flex-wrap">
          {this.state.users}
        </div>
    );
  }
}

export default UsersList;
