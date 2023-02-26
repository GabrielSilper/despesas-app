import PropTypes from "prop-types";
import React, { useState } from "react";
import { AiOutlineDown, AiOutlineMinus } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { RiBillLine } from "react-icons/ri";
import { BsCreditCard } from "react-icons/bs";
import { TbBeach, TbDotsCircleHorizontal } from "react-icons/tb";
import { MdOutlineHomeWork } from "react-icons/md";
import BodyCollapse from "../style/Collapse/BodyCollapse";
import HeaderCollapse from "../style/Collapse/HeaderCollapse";
import WrapperCollapse from "../style/Collapse/WrapperCollapse";
import formattedDate from "../helpers/formattedDate";

function CollapseComponent({ expense }) {
  const { name, value, type, date, description } = expense;
  const formattedValue = Number(value).toFixed(2).replace(".", ",");
  const dateProp = new Date(date);
  const [show, setShow] = useState(false);

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

  const bodyElement = (
    <BodyCollapse>
      <span>{icon}</span>
      <span>{formattedDate(dateProp)}</span>
      <span>{description}</span>
    </BodyCollapse>
  );

  return (
    <WrapperCollapse>
      <HeaderCollapse>
        <span>{name}</span>
        <span>{`R$ ${formattedValue}`}</span>
        <span>
          {show ? (
            <AiOutlineMinus onClick={() => setShow(!show)} />
          ) : (
            <AiOutlineDown onClick={() => setShow(!show)} />
          )}
        </span>
      </HeaderCollapse>
      {show && bodyElement}
    </WrapperCollapse>
  );
}

CollapseComponent.propTypes = {
  expense: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default CollapseComponent;
