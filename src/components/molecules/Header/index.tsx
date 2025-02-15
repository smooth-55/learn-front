import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <Col className={"flex items-center justify-between mx-10 text-white"}>
      <Row className="hover:cursor-pointer">
        <Link href="/">
        Logo
        </Link>
      </Row>
      <Row className="gap-5">
      <Col className="hover:text-[red] hover:font-bold hover:cursor-pointer">Home</Col>
      <Col className="hover:text-[red] hover:font-bold hover:cursor-pointer">About</Col>
      <Col className="hover:text-[red] hover:font-bold hover:cursor-pointer">Projects</Col>
      <Col className="hover:text-[red] hover:font-bold hover:cursor-pointer">Skills</Col>
      <Col className="hover:text-[red] hover:font-bold hover:cursor-pointer">Blog</Col>
      <Col className="hover:text-[red] hover:font-bold hover:cursor-pointer">Contact</Col>

      </Row>
      
    </Col>
  );
};

export { Header };
