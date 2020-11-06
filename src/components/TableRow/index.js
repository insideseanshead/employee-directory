import React from "react";
import "./style.css";

export default function TableRow(props) {
  return (
    <div>
      <tr>
        <th scope="row">1</th>
        <td>
          {props.name.first} {props.name.last}
        </td>
        <td>{props.picture}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob.date}</td>
      </tr>
    </div>
  );
}
