import React from "react"
import "./App.css";
import TableRow from "./components/TableRow";
import API from "./utils/API"

class App extends React.Component {
  state = {
    data:[]
  };

  componentDidMount() {
    API.getEmployees()
    .then(res => this.setState({data: res.data.results}))
  }

  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Dob</th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
