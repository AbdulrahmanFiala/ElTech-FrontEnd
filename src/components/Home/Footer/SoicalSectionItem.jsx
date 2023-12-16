import React from "react";
import { Link } from "react-router-dom";

const SoicalSectionItem = ({ soicalHref, soicalIcon }) => {
  return (
    <Link href={soicalHref}>
      <i className={soicalIcon}></i>
      <span>&nbsp;</span>
    </Link>
  );
};

export default SoicalSectionItem;
