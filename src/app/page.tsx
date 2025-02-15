"use client";
import {Header, Main } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col" style={{ 
        backgroundImage: `url('/assets/bg.jpg')`,
         backgroundSize: 'cover',
          backgroundPosition: 'center'
          }}>
       <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
       <Header />
       <Main />

        </div>
      

    </>
  );
}
