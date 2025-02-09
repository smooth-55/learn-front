"use client";
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div
        className={
          "flex w-full items-center justify-center gap-[10px] bg-[#1f1f1f] py-[10px]"
        }
      >
        <span
          className={"text-[14px] font-medium leading-[20px] text-white"}
        >{`Copyright ${year} © ${"Ashish"}`}</span>
      </div>
    </>
  );
};

export { Footer };
