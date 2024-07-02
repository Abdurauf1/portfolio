<section className="relative w-full h-screen">
  <div className="flex">
    <div className="max-w-7xl mx-auto flex flex-row items-start gap-5">
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
    <div className="">
      <div className="bg-gradient-to-r from-blue-750 to-indigo-900 rounded-lg select-none border border-blue-850 relative">
        <div className="flex flex-row">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
          <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
        </div>
        <div className="px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="rounded-full w-3 h-3 bg-red-400"></div>
            <div className="rounded-full w-3 h-3 bg-orange-400"></div>
            <div className="rounded-full w-3 h-3 bg-green-200"></div>
          </div>
        </div>
        <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
          <code className="font-mono">
            <div className="blink">
              <span className="text-pink-500 mr-2">const</span>
              <span className="text-white mr-2">coder</span>
              <span className="text-pink-500 mr-2">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">name:</span>
              <span className="text-gray-400">'</span>
              <span className="text-amber-300">Abdurauf</span>
              <span className="text-gray-400">',</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">skills:</span>
              <span className="text-gray-400">['</span>
              <span className="text-amber-300">React</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">JavaScript</span>
              <span className="text-gray-400">'],</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">problemSolver:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="text-green-400 ml-8 mr-2">hireable:</span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">() {"{"}</span>
            </div>
            <div>
              <span className="text-orange-400 ml-16 mr-2">return</span>
              <span className="text-gray-400">(</span>
            </div>
            <div>
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">hardWorker</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">problemSolver</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">skills.length</span>
              <span className="text-amber-300 mr-2">&gt;=</span>
              <span className="text-orange-400">5</span>
            </div>
            <div>
              <span className="text-gray-400 ml-16 mr-2">);</span>
            </div>
            <div>
              <span className="text-gray-400 ml-8">{"}"}</span>
            </div>
            <div>
              <span className="text-gray-400">{"}"}</span>
            </div>
          </code>
        </div>
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
</section>;
