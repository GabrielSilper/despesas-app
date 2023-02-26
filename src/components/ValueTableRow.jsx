import React from "react";
import STableRow from "../style/Table/STableRow";

function ValueTableRow({ expense }) {
  const { name, value, type, date, description } = expense;

  return (
    <STableRow>
      <td>{name}</td>
      <td>{value}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>{description}</td>
    </STableRow>
  );
}

export default ValueTableRow;
