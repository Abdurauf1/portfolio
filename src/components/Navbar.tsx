import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
    const navLinks = document.querySelectorAll(".nav-links") as NodeListOf<HTMLLIElement>;
    const navWrapper = document.querySelector("nav") as HTMLElement;

    sections.forEach(section => {
      const top: number = window.scrollY;
      const offset: number = section.offsetTop - navWrapper.clientHeight;
      const height: number = section.offsetHeight;
      const id: string | null = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((navLink: any) => {
          navLink.classList.remove("text-white");
          document
            .querySelector("header nav ul li a[href*=" + id + "]")
            ?.classList.add("text-white");
        });
      }
    });
  };

  useEffect(() => {
    handleScroll();

    document.addEventListener("click", (e: any) => {
      const nav = document.querySelector("nav") as HTMLElement;
      if (!nav.contains(e.target)) {
        setToggle(false);
      }
    });
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-7 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="text-white text-[18px] font-bold cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          Abdurauf
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium nav-links`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            alt="menu-close-button"
          />

          <ul
            className={`${
              !toggle ? "h-0 hidden" : "h-auto"
            } absolute top-[83px] left-0 list-none flex pb-2 justify-end items-start flex-col gap-4 w-full bg-primary`}
          >
            {navLinks.map(link => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} ${
                  styles.paddingX
                } hover:text-white font-poppins font-medium cursor-pointer text-[16px] py-2`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
