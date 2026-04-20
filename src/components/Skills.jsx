export default function Skills() {
  const SkillBar = ({ name, percentage, delay }) => (
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">
          {name}
        </span>
        <span className="text-sm font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
          {percentage}
        </span>
      </div>
      <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full rounded-full magic-progress transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-500/50" style={{ width: percentage, animation: `1s ease-out 0s 1 normal backwards running slideIn`}}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer">
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(18, 18, 26, 0.8) 0%, rgb(13, 13, 21) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent transition-all duration-300 magic-heading">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            My proficiency across different technologies
          </p>
        </div>

        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center duration-300">
              <span className="w-2 h-8 rounded-full mr-4 magic-progress">
              </span>
              Frontend Development
            </h3>
            <div className="space-y-6">
              <SkillBar name="HTML5" percentage="90%" delay="0" />
              <SkillBar name="CSS3" percentage="85%" delay="0.1" />
              <SkillBar name="JavaScript" percentage="80%" delay="0.2" />
              <SkillBar name="React" percentage="75%" delay="0.3" />
              <SkillBar name="Bootstrap" percentage="85%" delay="0.4" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center duration-300">
              <span className="w-2 h-8 rounded-full mr-4 magic-progress"></span>
              Backend Development
            </h3>
            <div className="space-y-6">
              <SkillBar name="Python" percentage="75%" delay="0" />
              <SkillBar name="Java" percentage="70%" delay="0.1" />
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center duration-300">
              <span className="w-2 h-8 rounded-full mr-4 magic-progress"></span>
              Database & Tools
            </h3>
            <div className="space-y-6">
              <SkillBar name="SQL" percentage="70%" delay="0" />
              <SkillBar name="Git" percentage="80%" delay="0.1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}