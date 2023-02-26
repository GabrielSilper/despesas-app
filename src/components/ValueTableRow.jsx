import PropTypes from "prop-types";
import React from "react";
import formattedDate from "../helpers/formattedDate";
import STableRow from "../style/Table/STableRow";
import { AiOutlineDown, AiOutlineMinus } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { RiBillLine } from "react-icons/ri";
import { BsCreditCard } from "react-icons/bs";
import { TbBeach, TbDotsCircleHorizontal } from "react-icons/tb";
import { MdOutlineHomeWork } from "react-icons/md";

function ValueTableRow({ expense }) {
  const { name, value, type, date, description } = expense;
  const formattedValue = Number(value).toFixed(2).replace(".", ",");
  const dateProps = new Date(date);

  const icon = ((theType) => {
    switch (theType) {
      case "Conta":
        return <RiBillLine size={22} />;
      case "Cartão":
        return <BsCreditCard size={20} />;
      case "Trabalho":
        return <MdOutlineHomeWork size={22} />;
      case "Comida":
        return <GiKnifeFork size={20} />;
      case "Lazer":
        return <TbBeach size={22} />;
      case "Outros":
        return <TbDotsCircleHorizontal size={22} />;
      default:
        return "---";
    }
  })(type);

  return (
    <STableRow>
      <td>{name}</td>
      <td>{`R$ ${formattedValue}`}</td>
      <td>{icon}</td>
      <td>{formattedDate(dateProps)}</td>
      <td>{description}</td>
    </STableRow>
  );
}

ValueTableRow.propTypes = {
  expense: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default ValueTableRow;
