import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between pt-5 lg:pt-10 lg:flex-row flex-col gap-5">
        <motion.div variants={textVariant()} className="w-full lg:w-1/2 lg:mb-0 mb-5">
          <h1 className="text-3xl lg:text-4xl font-bold leading-normal lg:mt-10">
            Hey, I'm <span className="text-pink-500">Abdurauf</span> -
            <span className="block">Frontend Developer</span>
          </h1>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-5 text-lg lg:text-xl text-secondary"
          >
            <span className="font-bold">Crafting Engaging</span> and{" "}
            <span className="font-bold">Dynamic User Experiences</span> with Modern Frontend
            Development
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-2 text-lg lg:text-xl text-secondary"
          >
            Delivering <span className="font-bold">High-Performance</span>,{" "}
            <span className="font-bold">User-Centric</span> Web Applications
          </motion.p>
        </motion.div>
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-blue-750 to-indigo-900 rounded-lg select-none border border-blue-850 relative">
          <div className="flex flex-row">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
            <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
          </div>
          <div className="px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="cursor-pointer rounded-full w-3 h-3 bg-red-400"></div>
              <div className="cursor-pointer rounded-full w-3 h-3 bg-orange-400"></div>
              <div className="cursor-pointer rounded-full w-3 h-3 bg-green-200"></div>
            </div>
          </div>
          <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
            <code>
              <div className="blink">
                <span className="font-mono text-pink-500 mr-2">const</span>
                <span className="font-mono text-white mr-2">coder</span>
                <span className="font-mono text-pink-500 mr-2">=</span>
                <span className="font-mono text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="font-mono text-white ml-8 mr-2">name:</span>
                <span className="font-mono text-gray-400">'</span>
                <span className="font-mono text-amber-300">Abdurauf</span>
                <span className="font-mono text-gray-400">',</span>
              </div>
              <div>
                <span className="font-mono text-white ml-8 mr-2">skills:</span>
                <span className="font-mono text-gray-400">['</span>
                <span className="font-mono text-amber-300">React</span>
                <span className="font-mono text-gray-400">', '</span>
                <span className="font-mono text-amber-300">JavaScript</span>
                <span className="font-mono text-gray-400">'],</span>
              </div>
              <div>
                <span className="font-mono text-white ml-8 mr-2">hardWorker:</span>
                <span className="font-mono text-orange-400">true</span>
                <span className="font-mono text-gray-400">,</span>
              </div>
              <div>
                <span className="font-mono text-white ml-8 mr-2">problemSolver:</span>
                <span className="font-mono text-orange-400">true</span>
                <span className="font-mono text-gray-400">,</span>
              </div>
              <div>
                <span className="font-mono text-green-400 ml-8 mr-2">hireable:</span>
                <span className="font-mono text-orange-400">function</span>
                <span className="font-mono text-gray-400">() {"{"}</span>
              </div>
              <div>
                <span className="font-mono text-orange-400 ml-16 mr-2">return</span>
                <span className="font-mono text-gray-400">(</span>
              </div>
              <div>
                <span className="font-mono text-cyan-400 ml-24">this.</span>
                <span className="font-mono text-white mr-2">hardWorker</span>
                <span className="font-mono text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="font-mono text-cyan-400 ml-24">this.</span>
                <span className="font-mono text-white mr-2">problemSolver</span>
                <span className="font-mono text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="font-mono text-cyan-400 ml-24">this.</span>
                <span className="font-mono text-white mr-2">skills.length</span>
                <span className="font-mono text-amber-300 mr-2">&gt;=</span>
                <span className="font-mono text-orange-400">5</span>
              </div>
              <div>
                <span className="font-mono text-gray-400 ml-16 mr-2">);</span>
              </div>
              <div>
                <span className="font-mono text-gray-400 ml-8">{"}"}</span>
              </div>
              <div>
                <span className="font-mono text-gray-400">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Hero, "hero");
