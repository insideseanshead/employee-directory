import React, { Component } from "react";
import "./App.css";
import TableRow from "./components/TableRow";
import API from "./utils/API";

class App extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.getEmployeeList("results");
  }

  getEmployeeList = () => {
    API.getEmployees()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Dob</th>
              </tr>
            </thead>
            <TableRow results={this.state.results} />
            {/* <tbody>
            <TableRow 
              name={"Butts Ohoolihan"}
              picture={"image"}
              phone={"555 555 5555"}
              email={"buttsOhoolihan@gmail.az"}
              dob={"08-10-92"}
            />
          </tbody> */}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
