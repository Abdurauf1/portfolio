import { navLinks } from "../constants";
import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Fade } from "hamburger-react";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const navRef = useRef<HTMLHeadElement | null>(null);

  const clickHandler = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${styles.paddingX} w-full flex items-center py-7 sticky top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="text-white text-[18px] font-bold cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          Abdurauf.dev
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${active === link.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] cursor-pointer font-medium nav-links duration-300 li`}
              onClick={() => {
                setActive(link.id);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* small size */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Fade duration={0.3} toggled={toggle} toggle={setToggle} size={25} />

          <ul
            className={`${!toggle ? "max-h-0" : "max-h-[360px]"
              } transition-all ease-in-out duration-500 overflow-hidden absolute top-[83px] left-0 list-none flex pb-2 justify-end items-start flex-col gap-4 w-full bg-primary`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${active === link.id ? "text-white" : "text-secondary"} ${styles.paddingX
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px] py-2 duration-300 w-full`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.id);
                }}
              >
                <a className="w-full block" href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
