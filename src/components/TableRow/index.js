import React from "react";
import "./style.css";

export default function TableRow(props) {
  return (
    
    //   <tr>
    //     {/* <th scope="row">1</th> */}
    //     <td>
    //       {props.name}
    //       {/* {props.name.last} */}
    //     </td>
    //     <td>{props.picture}</td>
    //     <td>{props.phone}</td>
    //     <td>{props.email}</td>
    //     <td>{props.dob}</td>
    //   </tr>
    <tBody>
    {props.results.map(res => (
        <tr>
        {/* <th scope="row">1</th> */}
        <td>
          {res.name.first} {res.name.last}
        </td>
        <td><img src={res.picture.thumbnail} alt={res.name.last} /></td>
        <td>{res.phone}</td>
        <td>{res.email}</td>
        <td>{res.dob.date}</td>
      </tr>
    ))}
    </tBody>
  );
}
