import ParticlesObj from './ParticlesObj.js';
import Response from './Response.js';
import Nasa from '../Assets/NASA.png';
import Logo from '../Assets/YahyaN.png';

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center m-6 h-[70vh] text-white">
        <img
        src={ Nasa }
        alt="Nasa logo"
        className="md:w-40 sm:w-32 z-10"
        />
        <div className="mt-4 md:text-lg sm:text-md">
          <h1 className="md:text-4xl sm:text-3xl font-bold max-w-xl mb-3">International Space Station Locator</h1>
          <Response />
        </div>
        <div
        className="flex items-center justify-center gap-2
        fixed left-0 bottom-0 w-full bg-black/[0.8] z-10
        text-sm py-3 border-y-[1px] border-slate-500">
        <span>Made by</span>
        <img
        src={ Logo }
        alt="YahyaN logo"
        className="md:h-12 sm:h-8"
        />
        </div>
      </div>
      <ParticlesObj />
    </>
  );
}

export default App;
