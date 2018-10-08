import React, {Component} from 'react';


class Rows extends Component {
  render() {
    return (
      <div>
        { this.props.users.map((user, index) => (
          <tr key={index}>
            <th>{index}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.location.city}</td>
          </tr>
        ))}
      </div>
    );
  }
}

class BetterTable extends Component {

  state = {users: [], selectedUser: null};

  componentDidMount() {
    this.getUsers('')
  }

  getUsers = (query) => {
    fetch(`https://randomuser.me/api/?results=10&seed=${query}`)
      .then(response => response.json())
      .then(data => this.setState({users: data.results}))
  };

  select = (user) => {
    this.setState({selectedUser: user})
  };

  getFullName = (user) => {
    if (user) {
      return `${user.name.first} ${user.name.last}`
    }
  };

  handleKeyDown = ({key, currentTarget}) => {
    if(key === 'Enter') {
      console.log(currentTarget.value);
      this.getUsers(currentTarget.value);
    }
  };

  render() {
    console.log('Table Render');
    return (
      <div>
        <input type="text" placeholder="Hit enter to fetch.." onKeyDown={this.handleKeyDown}/>

        <h4>{this.getFullName(this.state.selectedUser)}</h4>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
          </tr>
          </thead>
          <tbody>

          <Rows users={this.state.users} />

          </tbody>
        </table>
      </div>
    );
  }
}

export default BetterTable;