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
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export { MainPage };
