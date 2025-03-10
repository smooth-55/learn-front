"use client";
import Image from "next/image";
import React from "react";
import { Progress } from "antd";

const Skill: React.FC = () => {
  const skills = [
    {
      name: "Golang",
      percent: 50,
    },
    {
      name: "Python",
      percent: 60,
    },
    {
      name: "HTML",
      percent: 45,
    },
    {
      name: "CSS",
      percent: 45,
    },
    {
      name: "JavaScript",
      percent: 50,
    },
    {
      name: "Next.Js",
      percent: 55,
    },
    {
      name: "Linux",
      percent: 60,
    },
  ];
  return (
    <div
      id="skills"
      className="calc_height bg-black flex flex-col justify-center py-10"
    >
      <div className="m-4 flex flex-col md:flex-row gap-4">
        <div className="right w-full h-full">
          <div className="h-full bg-contain bg-no-repeat">
            <Image
              src="/assets/2.jpeg"
              className="clippath"
              alt="skills"
              width={900}
              height={900}
            />
          </div>
        </div>
        <div className="left w-full">
          <div className="content flex flex-col items-left justify-center h-full gap-5">
            <p className="text-5xl">
              <code>Skills</code>
            </p>
            <div className="flex flex-col">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex flex-row gap-2 text-white">
                    <p className="w-[90px]">{skill.name}</p>
                    <Progress
                      percent={skill.percent}
                      showInfo={false}
                      status="active"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Skill };
