import {
  About,
  Contact,
  Footer,
  Header,
  HiroSection,
} from "@/components/molecules";

const MainPage = () => {
  return (
    <div className="conainer w-full">
      <Header />
      <HiroSection />
      <About />
      <Contact />
      <div className="about h-screen bg-orange-500" id="about"></div>
      <Footer />
    </div>
  );
};

export { MainPage };
