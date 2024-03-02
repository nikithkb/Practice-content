import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

//I'm rendering everything in the List component, so I need to import the Table and Form components here.
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedRecord: null,
    };
  }

  handleAddRecord = (record) => {
    this.setState({ data: [...this.state.data, record] });
  };

  handleSelectRecord = (record) => {
    this.setState({ selectedRecord: record });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Table
              data={this.state.data}
              onSelectRecord={this.handleSelectRecord}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form onAddRecord={this.handleAddRecord} />
          </div>
          <div className="col-md-6">
            <Details record={this.state.selectedRecord} />
          </div>
        </div>
      </div>
    );
  }
}

const Details = ({ record }) => {
  return (
    <div className="mt-4">
      <h2>Details</h2>
      {record ? (
        <div>
          <p>ID: {record.id}</p>
          <p>First Name: {record.firstName}</p>
          <p>Last Name: {record.lastName}</p>
          <p>Email: {record.email}</p>
        </div>
      ) : (
        <p>Select a record to view details</p>
      )}
    </div>
  );
};

export default List;
