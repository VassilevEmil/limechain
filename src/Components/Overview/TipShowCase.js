import React, { useState } from "react";
import "./TipShowCase.css";
import TipItem from "./TipItem";

const TipShowCase = (props) => {
  return <h2 className="tips-list__fallback">No tips found</h2>;

  return <ul className="tips-list">{props.tips.map()}</ul>;
};

export default TipShowCase;
