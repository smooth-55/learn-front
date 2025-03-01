"use client";
import {ProjectContainer, Header, Main, SkillContainer } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col scrollbar-hide" style={{ 
        backgroundImage: `url('/assets/bg.jpg')`,
         backgroundSize: 'cover',
          backgroundPosition: 'center'
          }}>
       <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
       <Header />
       <Main />
      </div>
      <div className="main__container bg-bg_primary">
        <SkillContainer/>
        <ProjectContainer/>
       </div>

      
    </>
  );
}
