export default function About() {
  return (
    <section id="about" className="py-24 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(21, 21, 32, 0.8) 0%, rgb(15, 15, 20) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <div className="bg-clip-text text-transparent transition-all duration-300 flex align-center justify-center" >
                <div className="words fade">
                    <span className="magic-words">Web Designer</span>
                    <span className="magic-words">Creative Visualizer</span>
                    <span className="magic-words">Co-Operative</span>
                    <span className="magic-words">Enthusiast</span>
                    <span className="magic-words">Web Designer</span>
                    {/* <span className="word">Creative Visualizer</span> */}
                </div>
            </div>
          </h2>
        </div>
        <div className="mb-16">
          <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
            <div className="p-8 md:p-12">
              <p className="text-lg text-gray-200 leading-relaxed">I'm a creative front-end developer passionate about building modern and responsive web experiences. My journey began with a love for design and evolved into a deep curiosity for how the web works - combining logic with creativity to bring ideas to life.</p>
              <p className="text-lg text-gray-200 leading-relaxed mt-6">When I'm not coding, I enjoy learning new technologies, improving my projects, and exploring better ways to make the web faster and more engaging. I believe in continuous learning, attention to detail, and the power of clean, meaningful design.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="flex align-center justify-center">
            <span className="text-6xl font-medium  text-center mb-12 bg-clip-text text-transparent transition-all duration-300 magic-heading">What Drives Me</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Passion 1 */}
            <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 hover:transform hover:scale-105 group">
              <div className="p-8">
                <div className="mb-6 inline-block p-[20px] bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <i class="fa-solid fa-code magic-svg text-[26px]"></i>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">Technology</h4>
                <p className="text-gray-300 leading-relaxed">I'm passionate about leveraging technology to create innovative solutions that enhance user experiences and drive progress.</p>
              </div>
            </div>
            {/* Passion 2 */}
            <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 hover:transform hover:scale-105 group">
              <div className="p-8">
                <div className="mb-6 inline-block p-[20px] bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors duration-300">
                <i class="fa-regular fa-heart magic-svg text-[26px]"></i>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">Happiness</h4>
                <p className="text-gray-300 leading-relaxed">I believe that true success comes from finding joy in what you do and sharing that positivity with others.</p>
              </div>
            </div>
            {/* Passion 3 */}
            <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 hover:transform hover:scale-105 group">
              <div className="p-8">
                <div className="mb-6 inline-block p-[20px] bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors duration-300">
                <i class="fa-solid fa-puzzle-piece magic-svg text-[26px]"></i>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">Creativity</h4>
                <p className="text-gray-300 leading-relaxed">I thrive on thinking outside the box and bringing fresh, imaginative ideas to life through my work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}