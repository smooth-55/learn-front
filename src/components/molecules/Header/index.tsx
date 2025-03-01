"use client"
import { Col, Row, Drawer } from "antd";
import { MenuOutlined,  CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const menuItems = (
    <Row className="gap-2 sm:gap-5 flex-col md:flex-row ">
      <Col className="hover:text-red-500 hover:font-bold hover:border-b hover:border-red-500 hover:cursor-pointer" onClick={closeMenu}>Home</Col>
      <Col className="hover:text-red-500 hover:font-bold hover:border-b hover:border-red-500 hover:cursor-pointer">About</Col>
      <Col className="hover:text-red-500 hover:font-bold hover:border-b hover:border-red-500 hover:cursor-pointer">Projects</Col>
      <Col className="hover:text-red-500 hover:font-bold hover:border-b hover:border-red-500 hover:cursor-pointer">Skills</Col>
      <Col className="hover:text-red-500 hover:font-bold hover:border-b hover:border-red-500 hover:cursor-pointer">Blog</Col>
      <Col className="hover:text-red-500 hover:font-bold hover:border-b hover:border-red-500 hover:cursor-pointer">Contact</Col>
    </Row>
  );
  return (
    <Col className="text-white flex gap-5 items-center justify-between mx-[14px]">
      <Row className="hover:cursor-pointer mb-4 md:mb-0">
        <Link href="/" className="font-bold ">SMO</Link>
      </Row>
      <div className="hidden md:flex">{menuItems}</div>
      <MenuOutlined className="md:hidden mr-[14px]" style={{ fontSize: "1.1rem" }}  onClick={showMenu}/>
      <Drawer
       title="Menu" 
       style={{backgroundColor: "#091c2be8", color: "white"}} 
       placement="right"
        onClose={closeMenu} 
        width={200} 
        open={menuVisible}
        closeIcon={<CloseOutlined className="text-white"  />}
        >
        {menuItems}
      </Drawer>
    </Col>
  );
};

export { Header };
