import { myImg } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} justify-between absolute inset-0 top-[120px] max-w-7xl mx-auto flex lg:flex-row items-start flex-col gap-5`}
      >
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Abdurauf</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop websites, user <br className="sm:block hidden" /> interfaces and web
              applications.
            </p>
          </div>
        </div>
        <div className="mx-auto w-[280px] h-[280px] lg:mt-[70px] rounded-full relative before:content-[''] before:w-full before:h-full before:absolute before:rounded-full before:bg-[#915eff] before:-translate-x-4 before:-translate-y-4">
          <div className="w-full h-full rounded-full overflow-hidden relative z-10">
            <img className="w-full" src={myImg} alt="my-img" />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
