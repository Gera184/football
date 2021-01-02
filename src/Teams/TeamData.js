import React from "react";
import "./TeamData.css";
import { Container, Row, Col } from "react-bootstrap";

const TeamData = ({
  firstname,
  lastname,
  birthday,
  height,
  weight,
  age,
  country,
}) => {
  return (
    <div className="card">
      <h2>
        {firstname},{lastname}
      </h2>
      <p>height: {height}</p>
      <p>weight: {weight} </p>
      <p>age: {age} </p>
      <span>Birth date: {birthday}</span>
      <span>country: {country}</span>
    </div>
  );
};

export default TeamData;
