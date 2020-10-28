import React, { Component } from 'react';
import DataTable from './components/dataTable';

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-expand-md bg-dark navbar-dark fixed-top">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
            style={{ float: 'left' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="input-group mb-2 input-group-sm" style={{ maxWidth: '170vh' }}>
            <div className="input-group-prepend">
              <span className="input-group-text fas fa-search" />
            </div>
            <input type="text" className="form-control" placeholder="Search Employees, Jobs, Companies etc."
              style={{ backgroundColor: '#eee' }}
            />
          </div>

          <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{marginLeft:"10px"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="fas fa-bug" style={{ color: 'grey' }}>&ensp;Report bug</span>
                &ensp;  <span style={{ color: 'grey' }}>Matt</span>&ensp;
                <img
                  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                  alt="new"
                  height="30" width="30" style={{ borderRadius: 100, resize: 'both' }}
                />

              </li>
            </ul>
          </div>
        </nav>
        <div style={{ height: "12vh" }}></div>
        <DataTable />
        <div style={{ height: "12vh" }}></div>
      </div>
    );
  }
}

export default App;