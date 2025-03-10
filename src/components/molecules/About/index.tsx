import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="calc_height bg-black flex flex-col justify-center py-10"
    >
      <div className="m-4 flex flex-col-reverse md:flex-row gap-3">
        <div className="left w-full">
          <div className="content flex flex-col items-left justify-center h-full">
            <p className="text-5xl">
              <code>Ashish Dhakal</code>
            </p>
            <p className="text-xl">
              {`I've spent over three years honing my skills as a fullstack software
              developer primarily focusing on backend development with robust
              problem-solving skills and a keen interest in learning new things in
              web and technology.`}
            </p>
          </div>
        </div>
        <div className="right border border-black w-full h-full">
          <Image src="/assets/1.JPG" alt="profile" width={800} height={500} />
        </div>
      </div>
    </div>
  );
};

export { About };
