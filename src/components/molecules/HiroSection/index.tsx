import Link from "next/link";

const HiroSection = () => {
  const bg_image_url = "/assets/bg.jpg";

  return (
      <section
        className="relative h-64 sm:h-80 md:h-96 lg:h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bg_image_url})` }}
        id="home"
      >
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/50"></div>
        <div className="relative text-center text-white">
          <p className="text-sm  sm:text-base tracking-wider font-semibold">
            BUILD WITH <span className="text-blue-500 text-2xl">NEXT.JS</span>
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold my-4">
            Welcome To My{" "}
            <span className="text-blue-500">Personal Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base  tracking-wider font-semibold">
            A PASSIONATE{" "}
            <span className="text-blue-500 text-2xl">SOFTWARE ENGINEER</span>
          </p>
          <button className="bg-white text-blue-900 px-6 py-2 mt-4 rounded-full font-semibold hover:bg-blue-100 transition">
            <Link href="#about">
              <p>READ MORE</p>
            </Link>
          </button>
        </div>
      </section>
  );
};

export { HiroSection };
