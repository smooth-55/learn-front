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
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export { MainPage };
