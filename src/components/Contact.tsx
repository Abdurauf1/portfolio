import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div></motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
