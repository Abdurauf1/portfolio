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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am Frontend Developer from Tashkent, Uzbekistan. I have knowledge of HTML, CSS, JavaScript
        and React. I am looking forward to working in teams as well as individually. I am not only
        willing to deepen my knowledge but I also want to apply them to the real products. Hard
        working, conscientious, team work and goal-oriented. Love learning new things with patience,
        good communication skills, creative problem solver, ability to plan for everything and
        accelerated failure mentality.
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
