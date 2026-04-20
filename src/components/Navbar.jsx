export default function Navbar() {
  const scrollTo = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    style={{backgroundImage: 'linear-gradient(to bottom, #000000 10%, #15152000)',borderColor: '#60D5FF33'}}>
      <div className="max-w-[95rem] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="logo">
                <span className="odd" id='H'>H </span>
                <span className="even" id='A'>A </span>
                <span className="odd" id='R'>R </span>
                <span className="even" id='S'>S </span>
                <span className="odd" id='H'>H </span>
              </div>

            </div>
          </div>
          <div className="flex items-center space-x-8 rounded-full backdrop-blur-md">
            <button onClick={() => scrollTo('home')} className="font-bold rounded-full text-2xl magic-heading hover:px-5 hover:py-1 py-1 px-5 magic-bg">Home</button>
            <button onClick={() => scrollTo('about')} className="font-bold rounded-full text-2xl magic-heading hover:px-5 hover:py-1 py-1 px-5 magic-bg">About</button>
            <button onClick={() => scrollTo('skills')} className="font-bold rounded-full text-2xl magic-heading hover:px-5 hover:py-1 py-1 px-5 magic-bg">Skills</button>
            <button onClick={() => scrollTo('contact')} className="text-cyan-300 font-bold rounded-full transition-colors duration-500 ease-in-out text-2xl hover:rounded-full hover:font-bold hover:bg-[#085961] hover:px-5 hover:py-1 py-1 px-5 "><span className="magic-spc">Let's Talk!</span></button>
          </div>
        </div>
      </div>
    </nav>
  );
}