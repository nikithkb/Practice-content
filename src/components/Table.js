import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data, onSelectRecord }) => {
  return (
    <table className='table table-dark table-hover mb-3'>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index} onClick={() => onSelectRecord(record)}>
            <td>{record.id}</td>
            <td>{record.firstName}</td>
            <td>{record.lastName}</td>
            <td>{record.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
