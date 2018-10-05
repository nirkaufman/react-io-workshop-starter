import React, {Component} from 'react';

class Table extends Component {

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
          {this.state.users.map((user, index) => (
            <tr onClick={() => this.select(user)}>
              <th>{index}</th>
              <td>{this.getFullName(user)}</td>
              <td>{user.email}</td>
              <td>{user.location.city}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;