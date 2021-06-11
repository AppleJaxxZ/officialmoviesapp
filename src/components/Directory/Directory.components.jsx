import React from "react";
import { sections } from "./sections.data";
import MenuItem from "./../Menu-Item/Menu-Item.components";
import "./Directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
