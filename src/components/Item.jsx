import React, { Component } from "react";

function Item(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.data._id}</td>
        <td>{props.data.title}</td>
        <td>{props.data.slug}</td>
        <td>{props.data.content}</td>
        <td>
          <button onClick={() => props.onDelete()}> Delete </button>
        </td>
      </tr>
    </React.Fragment>
  );
}


export default Item;
