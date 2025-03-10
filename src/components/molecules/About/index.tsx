import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="calc_height bg-black px-10 flex flex-col items-center justify-center w-full"
    >
      <div className="flex flex-col-reverse justify-center gap-[100px]  md:flex-row   items-center ">
        <div className="left__section px-10 flex flex-col text-center items-center md:w-[50%] ">
          <p className=" text-3xl">{"Ashish Dhakal"}</p>
          <p className="text-xl">
            {`I've spent over three years honing my skills as a fullstack software
            developer primarily focusing on backend development with robust
            problem-solving skills and a keen interest in learning new things in
            web and technology.`}
          </p>
        </div>
        <div className="right__section h-full  md:w-[50%] ">
          <Image
            className=""
            src="assets/1.jpg"
            alt="profile"
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export { About };
