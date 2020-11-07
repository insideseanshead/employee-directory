import React, { Component } from "react";
import "./App.css";
import TableRow from "./components/TableRow";
import API from "./utils/API";

class App extends Component {
  state = {
    results: [],
    nameFilter: "",
    sortAccending: true,
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
    const nameFilterRegex = new RegExp(this.state.nameFilter, "i");
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="text"
                onChange={(e) =>
                  this.setState((state) => ({
                    ...state,
                    nameFilter: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort By:
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className={
                      "dropdown-item" +
                      (this.state.sortAccending ? " active" : "")
                    }
                    href="#"
                    onClick={() =>
                      !!this.setState((state) => ({
                        ...state,
                        sortAccending: true,
                      }))
                    }
                  >
                    Age Accending
                  </a>
                  <a
                    className={
                      "dropdown-item" +
                      (!this.state.sortAccending ? " active" : "")
                    }
                    href="#"
                    onClick={() =>
                      !!this.setState((state) => ({
                        ...state,
                        sortAccending: false,
                      }))
                    }
                  >
                    Age Decending
                  </a>
                </div>
              </div>
            </div>
          </div>
          <table className="table">
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
            <tbody>
              {this.state.results
                .filter((employee) =>
                  nameFilterRegex.test(
                    `${employee.name.first} ${employee.name.last}`
                  )
                )
                .sort((a, b) => {
                  if (this.state.sortAccending) {
                    return b.dob.age - a.dob.age;
                  } else {
                    return a.dob.age - b.dob.age;
                  }
                })
                .map((employee,i) => (
                  <TableRow key={i} {...employee} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
