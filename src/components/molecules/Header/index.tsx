import { Col, Row } from "antd";
import React from "react";

const Header: React.FC = () => {
  return (
    <Row className={"bg-[#566884]"}>
      <Col>Home</Col>
      <Col>About</Col>
      <Col>Projects</Col>
      <Col>Skills</Col>
      <Col>Blog</Col>
      <Col>Contact</Col>
    </Row>
  );
};

export { Header };
