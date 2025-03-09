import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative footer flex items-center justify-center h-10 bg-color1 "
      id="footer"
    >
      <div className="copyright">
        <p>
          {`Copyright © ${year}`}{" "}
          <Link href={"/"}>
            <span className="text-blue-500">Ashish Dhakal</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
