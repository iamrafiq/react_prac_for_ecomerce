import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      users: [],
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true,
    });
    axios("https://api.randomuser.me/?nat=US&results=5").then((responce) => {
      /**
       * if we want to change the any state variable, we should use setState method
       * it will update user state variable and re-render ui
       */
      this.setState({
        users: [...this.state.users, ...responce.data.results],
        loading: false,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log("more user loaded");
  }
  /**
   * this method is use full for calling API just before the component
   * mount
   */
  componentWillMount() {
    this.getUsers();
  }
  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        <hr />
        {!loading ? (
          users.map((user) => (
            <div key={user.id.value}>
              <h3 style={{ color: "red" }}>{user.name.first}</h3>
              <p>{user.email}</p>
              <hr />
            </div>
          ))
        ) : (
          <Loading message="Loading please wait" />
        )}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//        Hello
//     </div>
//   );
// }

export default App;
