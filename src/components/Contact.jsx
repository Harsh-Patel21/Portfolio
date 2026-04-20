export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="py-24 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(21, 21, 32, 0.8) 0%, rgb(15, 15, 20) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent magic-heading">Let's Team Up</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Tell me more about yourself and what you've got in your mind
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 group">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-[9px] bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <i class="fa-regular fa-envelope magic-svg text-[26px]"></i>
                    
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Chat to ME</h3>
                    <p className="text-gray-300 mb-2">I would be grateful to talk with you.</p>
                    <a href="mailto:harshdiwani21@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 underline magic-heading">harshdiwani21@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 group">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-[9px] bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <i class="fa-solid fa-phone magic-svg text-[26px]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Call to ME</h3>
                    <p className="text-gray-300 mb-2">Available at Office hours.</p>
                    <a href="tel:+919930701782" className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 underline magic-heading">+91 9930701782</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 group">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-[9px] bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <i class="fa-solid fa-location-dot magic-svg text-[26px]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Meet Me Here</h3>
                    <p className="text-gray-300 mb-2">Would Love to share coffee together.</p>
                    <p className="text-cyan-300 magic-heading">
                      <a href="https://maps.app.goo.gl/3VHh7Da5LAu88GuL6" target="blank" rel="noopener noreferrer" className="magic-heading hover:text-cyan-200 transition-colors duration-300 underline">
                        Anand, Gujarat
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="rounded-xl border shadow bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
              <div className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <input className="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 outline-none transition-colors duration-300" placeholder="Your Name" required type="text" name="name" />
                  </div>
                  <div>
                    <input className="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 outline-none transition-colors duration-300" placeholder="Your Email" required type="email" name="email" />
                  </div>
                  <div>
                    <textarea className="flex min-h-[60px] w-full rounded-md border px-3 py-2 text-base shadow-sm bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 outline-none transition-colors duration-300 resize-none" name="message" placeholder="Your Message" required rows="6"></textarea>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 rounded-md shadow h-9 px-4 w-full bg-gradient-to-r magic-progress hover:from-cyan-300 hover:to-blue-400 text-cyan-950 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/50 border-0" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}