"use client";
import { Drawer } from "antd";
import React, { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigation_menu = (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="nav_item" onClick={onClose}>
        <Link href="#home" className="">
          <span className="text-white">Home</span>
        </Link>
      </div>
      <div className="nav_item " onClick={onClose}>
        <Link href="#about">
          <span className="text-white">About</span>
        </Link>
      </div>
      <div className="nav_item" onClick={onClose}>
        <Link href="#contact">
          <span className="text-white">Contact</span>
        </Link>
      </div>
      <div className="nav_item" onClick={onClose}>
        <Link href="/">
          <span className="text-white">Blog</span>
        </Link>
      </div>
      <div className="nav_item" onClick={onClose}>
        <Link href="/">
          <span className="text-white">My Resume</span>
        </Link>
      </div>
      {/* <div className="nav_item hidden md:block" onClick={onClose}>
        <Link href="/">HIRE ME</Link>
      </div> */}
    </div>
  );
  return (
    <section
      id="nav"
      className="p-4 bg-color1 flex items-center justify-between sticky top-0 z-10"
    >
      <div className="logo flex">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      {/* <span className="md:hidden cursor-pointer">HIRE ME</span> */}
      <div className="navigation gap-3 hidden md:flex">{navigation_menu}</div>
      <div className="hamburder md:hidden cursor-pointer" onClick={showDrawer}>
        <MenuOutlined />
      </div>
      <Drawer
        title="Menu"
        onClose={onClose}
        open={open}
        width={250}
        style={{
          backgroundColor: "#081826",
          color: "white",
        }}
        // style={{ backgroundColor: "#00000015 " }}
        closeIcon={<CloseOutlined style={{ color: "white" }} />}
      >
        {navigation_menu}
      </Drawer>
    </section>
  );
};

export { Header };
