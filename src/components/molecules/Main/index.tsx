"use client";
import { Col, Typography } from "antd";
import React, { useEffect, useState } from "react";

const Main: React.FC = () => {
  const words = ["Hello There", "It's Ashish Dhakal", "Passionate Full Stack Developer"];
   const [index, setIndex] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <Col className="h-[100vh] text-white flex flex-col items-center justify-center gap-0">
      <Typography.Text className="!text-5xl font-bold text-white">{words[index]}</Typography.Text>
      
  </Col>;
};

export { Main };
