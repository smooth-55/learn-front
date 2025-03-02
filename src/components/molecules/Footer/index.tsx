import Link from "next/link";

const Footer = () => {
  const dt = new Date();

  return (
    <>
      <footer
        className="footer flex items-center justify-center h-10 bg-black "
        id="footer"
      >
        <div className="copyright">
          <p>
            {`Copyright © ${dt.getFullYear()}`}{" "}
            <Link href={"/"}>
              <span className="text-blue-500">Ashish Dhakal</span>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export { Footer };
