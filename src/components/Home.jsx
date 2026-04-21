export default function Home() {
  const scrollTo = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 transition-opacity duration-1000 opacity-100">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight magic-heading">
              Hi, I'm <span className="bg-clip-text text-transparent transition-all duration-300">
                Harsh Patel</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold transition-colors duration-300 magic-heading">Web Designer</h2>
            <p className="text-3xl md:text-3xl font-bold transition-colors duration-300 tracking-widest moving-outline"> CyberSecurity Learner</p>
            <p className="text-lg text-gray-300 leading-relaxed">Seeking an internship opportunity in software or web development to apply my academic knowledge, improve my technical skills, and gain hands-on experience in real-world projects.</p>
            <div className="flex space-x-4 pt-4">
              <button onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md shadow hover:bg-primary/90 h-9 magic-progress hover:from-cyan-300 hover:to-blue-400 text-cyan-950 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/50 border-0">Let's Connect</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md shadow-sm h-9 border-2 border-cyan-700 hover:border-cyan-400 magic-heading px-8 py-6 text-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10 bg-transparent">View Resume</button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl animate-pulse transition-all duration-500 magic-progress opacity-45" >
                {/* style={{ background: 'linear-gradient(45deg, rgba(0, 229, 255, 0.4) 0%, rgba(96, 213, 255, 0.4) 100%)' }} */}
              </div>
              <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-2 transform hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-400/20">
                {/* For strict offline use, download an image to src/assets/profile.jpg and use src={profileImg} */}
                <img alt="Harsh Patel" className="rounded-2xl w-full h-auto object-cover" src="./public/portfo.jpg" style={{ maxWidth: '400px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}