import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = ({ color, text }) => {
  return (
    <>
      <Badge pill bg={color}>
        {text}
      </Badge>
    </>
  );
};

export default Tags;
