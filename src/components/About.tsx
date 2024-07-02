import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-pink-500`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Frontend Developer from Tashkent, Uzbekistan, with expertise in HTML, CSS,
        JavaScript, and React. I thrive in both team settings and individual projects, eager to
        deepen my knowledge and apply my skills to real-world products. I am hardworking,
        conscientious, and goal-oriented.
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
