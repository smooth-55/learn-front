import {
  About,
  Contact,
  Footer,
  Header,
  HiroSection,
  Project,
  Skill,
} from "@/components/molecules";

const MainPage = () => {
  return (
    <div className="">
      <Header />
      <HiroSection />
      <Project />
      <Skill />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export { MainPage };
