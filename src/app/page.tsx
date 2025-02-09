import { Footer, Header, Main } from "@/components";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
