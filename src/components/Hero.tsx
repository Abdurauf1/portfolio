import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="w-full">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between pt-10 lg:flex-row flex-col gap-5`}
      >
        <div className="w-full lg:w-1/2 lg:mb-0 mb-5">
          <h1 className="text-4xl font-bold leading-normal mt-10">
            Hey, I'm <span className="text-pink-500">Abdurauf</span> -
            <span className="block">Frontend Developer</span>
          </h1>
          <p className="mt-4 text-xl">
            Crafting Engaging and Dynamic User Experiences with Modern Frontend Development
          </p>
          <p className="mt-2 text-xl">Delivering High-Performance, User-Centric Web Applications</p>
        </div>
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
    </section>
  );
};

export default Hero;
