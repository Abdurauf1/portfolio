import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollUpBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${visible ? "opacity-1 visible" : "opacity-0 invisible"}
      duration-500 w-10 h-10 border-[2px] rounded-sm flex justify-center items-center cursor-pointer fixed bottom-10 right-5 z-10 outline-none hover:bg-white group`}
    >
      <FaChevronUp className="text-lg group-hover:text-primary" />
    </button>
  );
};

export default ScrollUpBtn;
